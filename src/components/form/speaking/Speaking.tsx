import { getRecorder } from 'utils/record'
import * as S from './Speaking.style'
import { RecordRTCPromisesHandler, invokeSaveAsDialog } from 'recordrtc'
import { useState } from 'react'
import Recorder from '../recorder/Recorder'
import { useSpeakingScoreMutation } from 'hooks/query/useSpeakingScoreMutation'

const sampleDiary = `오늘의 일기입니다. 심혈을 기울여 만든 맞춤법 검사기. 만들었는데 과연 제대로 될 지는 모르겠다. 아 너무 졸리다. 진짜 졸리다. 종강하면 하루종일 잔다 진짜. 근데 종강하려면 아직도 한 달이나 남았네. 이 패턴으로 한 달을 더 살아야 된다고? 맞춤법 좀 실수하지 말아봐.`

const getSentenceArray = (str: string) =>
  str
    .replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, '$1$2|')
    .split('|')

const Speaking = () => {
  const [recorder, setRecorder] = useState<RecordRTCPromisesHandler>()
  const { mutateAsync } = useSpeakingScoreMutation({
    onSuccess: () => {},
    onError: () => {},
  })

  const record = async () => {
    const recorder = await getRecorder()
    recorder.startRecording()
    setRecorder(recorder)
  }

  const blobToBase64 = (blob: Blob) => {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    return new Promise<String | ArrayBuffer>((resolve) => {
      reader.onloadend = () => {
        resolve(reader?.result || '')
      }
    })
  }

  const stop = async (sentence: string) => {
    await recorder?.stopRecording()
    const blob = await recorder?.getBlob()
    if (!blob) {
      return
    }
    invokeSaveAsDialog(blob, 'audio.wav')
    const base64 = await blobToBase64(blob)
    console.log(base64)

    // mutateAsync()
    return URL.createObjectURL(blob)
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
              <Recorder record={record} stop={() => stop(sentence)} />
            </S.SentenceBottom>
          </S.Sentence>
        ))}
      </S.SentenceGroup>
    </S.Container>
  )
}

export default Speaking
