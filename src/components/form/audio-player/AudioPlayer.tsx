import { speak } from 'utils/text-to-speech'
import * as S from './AudioPlayer.style'
import { useState } from 'react'

interface AudioPlayerProps {
  text: string
}

const AudioPlayer = ({ text }: AudioPlayerProps) => {
  const playAudio = (text: string) => {
    speak(text, window.speechSynthesis)
  }

  return (
    <button onClick={() => playAudio(text)}>
      <S.Icon className="material-icons">play_arrow</S.Icon>
    </button>
  )
}

export default AudioPlayer

/* <button
        onClick={() => {
          pause(window.speechSynthesis)
        }}
      >
        <S.Icon className="material-icons">pause</S.Icon>
      </button> */
