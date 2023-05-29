import React, { useState } from 'react'
import * as S from './Recorder.style'

interface RecorderProps {
  record: () => Promise<void>
  stop: () => Promise<string | undefined>
}

const Recorder = ({ record, stop }: RecorderProps) => {
  const [isRecording, setIsRecording] = useState(false)
  const [audioSrc, setAudioSrc] = useState('')

  return (
    <S.Container>
      <S.Button>
        {!isRecording ? (
          <span
            onClick={() => {
              record()
              setIsRecording(true)
            }}
            className="material-symbols-outlined"
          >
            mic
          </span>
        ) : (
          <span
            onClick={async () => {
              const blobUrl = await stop()
              setAudioSrc(blobUrl || '')
              setIsRecording(false)
              const audio = new Audio(blobUrl)
              audio.play()
            }}
            className="material-symbols-outlined"
          >
            pause
          </span>
        )}
      </S.Button>
      <p>녹음시작</p>
      <audio src={audioSrc} />
    </S.Container>
  )
}

export default Recorder
