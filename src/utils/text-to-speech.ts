const pitch = 1
const rate = 1

async function populateVoiceList(synth: SpeechSynthesis) {
  try {
    const voices = await synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase()
      const bname = b.name.toUpperCase()
      if (aname < bname) return -1
      else if (aname === bname) return 0
      else return +1
    })

    return voices
  } catch (error) {
    throw new Error('Failure retrieving voices')
  }
}

export async function speak(textToRead: string, synth: SpeechSynthesis) {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => populateVoiceList
  }

  if (synth.speaking) {
    console.error('speechSynthesis.speaking')
    return
  }

  if (textToRead !== '') {
    const utterThis = new SpeechSynthesisUtterance(textToRead)
    utterThis.onend = function (event) {}
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror')
    }
    // utterThis.voice = voices[0]
    utterThis.pitch = pitch
    utterThis.rate = rate

    synth.cancel()
    synth.speak(utterThis)
  }
}

export async function pause(synth: SpeechSynthesis) {
  synth.pause()
}

export async function resume(synth: SpeechSynthesis) {
  synth.resume()
}

export async function stop(synth: SpeechSynthesis) {
  synth.cancel()
}
