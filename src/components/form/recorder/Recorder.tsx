import React, { useState } from 'react'
import * as S from './Recorder.style'
import { getScoreColor } from 'utils/get-score-color'
import { RecordRTCPromisesHandler } from 'recordrtc'
import { getRecorder, arrayBufferToBase64 } from 'utils/record'
import { Sentence } from '../speaking/Speaking.style'
import toWav from 'audiobuffer-to-wav'
import { useNewSpeakingScoreMutation } from 'hooks/query/useSpeakingScoreMutation'

interface RecorderProps {
  sentence: string
  onSuccess: (score: number) => void
}

enum recordStatus {
  NOT_STARTED = '녹음 시작',
  RECORDING = '녹음 중...',
  EVALUATING = '평가 중...',
  ENDED = '다시 녹음하기',
}
const Recorder = ({ sentence, onSuccess }: RecorderProps) => {
  const [status, setStatus] = useState<recordStatus>(recordStatus.NOT_STARTED)
  const [score, setScore] = useState(0)
  const [recorder, setRecorder] = useState<RecordRTCPromisesHandler>()

  const { mutateAsync } = useNewSpeakingScoreMutation({
    onSuccess: () => {},
    onError: () => {},
  })

  const createRecorder = async () => {
    const newRecorder = await getRecorder()
    return newRecorder
  }

  const record = async () => {
    const newRecorder = await createRecorder()
    await newRecorder.reset()
    newRecorder.startRecording()
    setRecorder(newRecorder)
  }

  const stop = async (sentence: string) => {
    const audioContext = new AudioContext({
      sampleRate: 16000,
    })

    await recorder?.stopRecording()
    const blob = await recorder?.getBlob()
    if (!blob) {
      return { url: '', score: 0 }
    }
    let blobReader: FileReader = new FileReader()
    blobReader.readAsArrayBuffer(blob)

    blobReader.onloadend = async (e) => {
      let arrayBuffer = e.target?.result
      audioContext.decodeAudioData(
        arrayBuffer as ArrayBuffer,
        async (resampledBuffer) => {
          const wavBuffer = toWav(resampledBuffer)
          const base64Audio = arrayBufferToBase64(wavBuffer)
          const payload = {
            script: sentence,
            audio: base64Audio,
          }
          const result = await mutateAsync(payload)
          const score = Math.ceil((result?.score || 0) * 20)
          onSuccess(score)
          return {
            url: URL.createObjectURL(blob),
            score,
          }
        }
      )
    }
  }

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
      case recordStatus.EVALUATING:
        return (
          <span
            onClick={async () => {
              await stop(sentence)
              setScore(score)
              setStatus(recordStatus.ENDED)

              // const audio = new Audio(url)
              // audio.play()
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
