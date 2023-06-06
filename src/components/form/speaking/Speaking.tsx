import { getRecorder } from 'utils/record'
import * as S from './Speaking.style'
import { RecordRTCPromisesHandler, invokeSaveAsDialog } from 'recordrtc'
import { useEffect, useState } from 'react'
import Recorder from '../recorder/Recorder'
import { useSpeakingScoreMutation } from 'hooks/query/useSpeakingScoreMutation'
import { useDiaryContext } from 'hooks/context/useDiaryContext'

const getSentenceArray = (str: string) =>
  str
    .replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, '$1$2|')
    .split('|')

const Speaking = () => {
  const { diary, setDiary } = useDiaryContext()
  const [recorder, setRecorder] = useState<RecordRTCPromisesHandler>()
  const [scoreList, setScoreList] = useState<number[]>([])
  const { mutateAsync } = useSpeakingScoreMutation({
    onSuccess: () => {},
    onError: () => {},
  })

  useEffect(() => {
    setDiary({
      ...diary,
      speaking: Math.ceil(
        scoreList.reduce((acc, value) => acc + value, 0) / scoreList.length
      ),
    })
  }, [scoreList])

  const addScoreList = (score: number) => setScoreList([...scoreList, score])

  const record = async () => {
    const recorder = await getRecorder()
    recorder.startRecording()
    setRecorder(recorder)
  }

  const stop = async (
    sentence: string
  ): Promise<{ score: number; url: string }> => {
    await recorder?.stopRecording()
    const blob = await recorder?.getBlob()
    if (!blob) {
      return { url: '', score: 0 }
    }
    const file = new File([blob], 'audio.pcm')
    const formData = new FormData()
    formData.append('script', sentence)
    formData.append('audio', file)
    const result = await mutateAsync(formData)
    recorder?.destroy()
    const score = Math.ceil((result?.score || 0) * 20)
    addScoreList(score)
    return {
      url: URL.createObjectURL(blob),
      score,
    }
  }

  return (
    <S.Container>
      <S.Diary>{diary.content}</S.Diary>
      <S.Divider />
      <S.SentenceGroup>
        {getSentenceArray(diary.content).map((sentence) => (
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
