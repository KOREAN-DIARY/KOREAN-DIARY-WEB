import { pause, resume, speak } from 'utils/text-to-speech'
import * as S from './AudioPlayer.style'
import { useState } from 'react'

interface AudioPlayerProps {
  text: string
}

const AudioPlayer = ({ text }: AudioPlayerProps) => {
  const [playState, setPlayState] = useState(false)
  const playAudio = (text: string) => {
    speak(text, window.speechSynthesis)
  }

  const handleAudio = () => {
    if (playState) {
      pause(window.speechSynthesis)
    } else {
      window.speechSynthesis.speaking
        ? resume(window.speechSynthesis)
        : playAudio(text)
    }
    setPlayState((prev) => !prev)
  }

  return (
    <button onClick={handleAudio}>
      <S.Icon className="material-icons">
        {playState ? 'pause' : 'play_arrow'}
      </S.Icon>
    </button>
  )
}

export default AudioPlayer
