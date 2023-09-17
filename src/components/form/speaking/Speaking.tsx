import { getRecorder } from 'utils/record'
import * as S from './Speaking.style'
import { RecordRTCPromisesHandler, invokeSaveAsDialog } from 'recordrtc'
import { useEffect, useState } from 'react'
import Recorder from '../recorder/Recorder'
import { useSpeakingScoreMutation } from 'hooks/query/useSpeakingScoreMutation'
import { useDiaryContext } from 'hooks/context/useDiaryContext'
import AudioPlayer from '../audio-player/AudioPlayer'

const getSentenceArray = (str: string) =>
  str
    .replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, '$1$2|')
    .split('|')

const Speaking = () => {
  const { diary, setDiary } = useDiaryContext()
  const [scoreList, setScoreList] = useState<number[]>([])

  useEffect(() => {
    setDiary({
      ...diary,
      speaking: Math.ceil(
        scoreList.reduce((acc, value) => acc + value, 0) / scoreList.length
      ),
    })
  }, [scoreList])

  const addScoreList = (score: number) => setScoreList([...scoreList, score])

  return (
    <S.Container>
      <S.Diary>{diary.content}</S.Diary>
      <S.Divider />
      <S.SentenceGroup>
        {getSentenceArray(diary.content).map((sentence) => (
          <S.Sentence key={sentence}>
            <S.SentenceTop>
              <AudioPlayer text={sentence} size="1.5rem" />
              {sentence}
            </S.SentenceTop>
            <S.SentenceBottom>
              <Recorder
                sentence={sentence}
                onSuccess={(score) => addScoreList(score)}
              />
            </S.SentenceBottom>
          </S.Sentence>
        ))}
      </S.SentenceGroup>
    </S.Container>
  )
}

export default Speaking
