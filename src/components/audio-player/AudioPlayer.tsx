import { speak } from 'utils/text-to-speech'

const AudioPlayer = () => {
  const playAudio = () => {
    speak('여름에 해당하는 이미지를 찾으세요', window.speechSynthesis)
  }

  return (
    <div>
      <button onClick={() => playAudio()}>play</button>
    </div>
  )
}

export default AudioPlayer
