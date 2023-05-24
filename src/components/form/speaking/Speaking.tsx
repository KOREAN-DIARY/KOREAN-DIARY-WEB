import { getRecorder } from 'utils/record'
import * as S from './Speaking.style'
import { RecordRTCPromisesHandler } from 'recordrtc'
import { useState } from 'react'

const sampleDiary = `오늘의 일기입니다. 심혈을 기울여 만든 맞춤법 검사기. 만들었는데 과연 제대로 될 지는 모르겠다. 아 너무 졸리다. 진짜 졸리다. 종강하면 하루종일 잔다 진짜. 근데 종강하려면 아직도 한 달이나 남았네. 이 패턴으로 한 달을 더 살아야 된다고? 맞춤법 좀 실수하지 말아봐.`

const getSentenceArray = (str: string) =>
  str
    .replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, '$1$2|')
    .split('|')

const Speaking = () => {
  const [recorder, setRecorder] = useState<RecordRTCPromisesHandler>()
  const [isRecording, setIsRecording] = useState(false)

  const record = async () => {
    const recorder = await getRecorder()
    recorder.startRecording()
    setRecorder(recorder)
    setIsRecording(true)
  }

  const stop = () => {
    recorder?.stopRecording()
    setIsRecording(false)
  }

  return (
    <S.Container>
      <S.Diary>{sampleDiary}</S.Diary>
      <S.Divider />
      <S.SentenceGroup>
        {getSentenceArray(sampleDiary).map((sentence) => (
          <S.Sentence key={sentence}>
            <S.SentenceTop>
              <span className="material-icons">play_arrow</span>
              {sentence}
            </S.SentenceTop>
            <S.SentenceBottom>
              {!isRecording ? (
                <span
                  onClick={() => record()}
                  className="material-symbols-outlined"
                >
                  mic
                </span>
              ) : (
                <span
                  onClick={() => stop()}
                  className="material-symbols-outlined"
                >
                  pause
                </span>
              )}
              <p>녹음시작</p>
            </S.SentenceBottom>
          </S.Sentence>
        ))}
      </S.SentenceGroup>
    </S.Container>
  )
}

export default Speaking
