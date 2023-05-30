import React, { useState } from 'react'
import * as S from './Recorder.style'
import { getScoreColor } from 'utils/get-score-color'

interface RecorderProps {
  record: () => Promise<void>
  stop: () => Promise<{ score: number; url: string }>
}

enum recordStatus {
  NOT_STARTED = '녹음 시작',
  RECORDING = '녹음 중...',
  ENDED = '다시 녹음하기',
}

const Recorder = ({ record, stop }: RecorderProps) => {
  const [status, setStatus] = useState<recordStatus>(recordStatus.NOT_STARTED)
  const [score, setScore] = useState(0)

  const renderButton = (status: recordStatus) => {
    switch (status) {
      case recordStatus.NOT_STARTED:
      case recordStatus.ENDED:
        return (
          <span
            onClick={() => {
              record()
              setStatus(recordStatus.RECORDING)
            }}
            className="material-symbols-outlined"
          >
            mic
          </span>
        )
      case recordStatus.RECORDING:
        return (
          <span
            onClick={async () => {
              const { url, score } = await stop()
              setScore(score)
              setStatus(recordStatus.ENDED)

              const audio = new Audio(url)
              audio.play()
            }}
            className="material-symbols-outlined"
          >
            pause
          </span>
        )
    }
  }

  return (
    <S.Container>
      <S.Button>{renderButton(status)}</S.Button>
      <p>{status}</p>
      {!!score && (
        <S.Score color={getScoreColor(score)}>
          점수:&nbsp; <span>{score}</span>점
        </S.Score>
      )}
    </S.Container>
  )
}

export default Recorder
