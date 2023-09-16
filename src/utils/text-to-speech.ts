const pitch = 1

const populateVoiceList = async (synth: SpeechSynthesis) => {
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

export const speak = async (textToRead: string, synth: SpeechSynthesis) => {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => populateVoiceList
  }

  if (synth.speaking) {
    return
  }

  if (textToRead !== '') {
    const utterThis = new SpeechSynthesisUtterance(textToRead)
    utterThis.onend = function (event) {}
    utterThis.onerror = function (event) {}
    utterThis.rate = 0.75
    utterThis.pitch = pitch

    synth.cancel()
    synth.speak(utterThis)
  }
}

export const pause = async (synth: SpeechSynthesis) => {
  synth.pause()
}

export const resume = async (synth: SpeechSynthesis) => {
  synth.resume()
}

export const stop = async (synth: SpeechSynthesis) => {
  synth.cancel()
}
