import { pause, resume, speak } from 'utils/text-to-speech'
import * as S from './AudioPlayer.style'
import { useState } from 'react'

interface AudioPlayerProps {
  text: string
}

const AudioPlayer = ({ text }: AudioPlayerProps) => {
  const [playState, setPlayState] = useState(true)
  const playAudio = (text: string) => {
    speak(text, window.speechSynthesis)
  }

  const handleAudio = () => {
    setPlayState((prev) => !prev)
    if (!playState) {
      pause(window.speechSynthesis)
    } else {
      window.speechSynthesis.speaking
        ? resume(window.speechSynthesis)
        : playAudio(text)
    }
  }

  return (
    <div>
      <button onClick={handleAudio}>
        <S.Icon className="material-icons">
          {playState ? 'play_arrow' : 'pause'}
        </S.Icon>
      </button>
    </div>
  )
}

export default AudioPlayer
