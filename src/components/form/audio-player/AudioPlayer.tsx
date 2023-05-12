import { speak } from 'utils/text-to-speech'

const AudioPlayer = () => {
  const playAudio = () => {
    speak('Web Speech API 테스트 중입니다.', window.speechSynthesis)
  }

  return (
    <div>
      <button onClick={() => playAudio()}>play</button>
    </div>
  )
}

export default AudioPlayer
