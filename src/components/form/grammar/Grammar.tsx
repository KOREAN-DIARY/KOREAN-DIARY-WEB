import {
  ErrorInfo,
  WritingResponse,
  useWritingScoreQuery,
} from 'hooks/query/useWritingScoreMutation'
import ResultGroup from '../result-group/ResultGroup'
import * as S from './Grammar.style'
import { useDiaryContext } from 'hooks/context/useDiaryContext'
import { useState } from 'react'
import { DiaryType } from 'hooks/query/useDiaryListQuery'

interface GrammarProps {
  defaultDiary?: DiaryType
}

const highlightScript = (data: WritingResponse) => {
  const wrongWordList = data?.errorInfoList.map(
    (err: ErrorInfo) => err.originalString
  )
  let highlightedScript = data.script
  wrongWordList.forEach((word) => {
    highlightedScript = highlightedScript.replace(
      word,
      `<span style="color: var(--red)">${word}</span>`
    )
  })
  return highlightedScript
}

const correctDiary = (data: WritingResponse) => {
  let correctedScript = data.script
  data?.errorInfoList.forEach(
    (err: ErrorInfo) =>
      (correctedScript = correctedScript.replace(
        err.originalString,
        err.correctWord.split('|')[0]
      ))
  )
  return correctedScript
}

const Grammar = ({ defaultDiary }: GrammarProps) => {
  const [resultText, setResultText] = useState('')
  const { diary: diaryContext, setDiary } = useDiaryContext()
  const diary = defaultDiary || diaryContext
  const { data, isSuccess } = useWritingScoreQuery({
    script: diary.originalContent,
    // FIXME: add correct handler
    onSuccess: (data) => {
      setDiary({
        ...diary,
        content: correctDiary(data),
        writing: 100 - data.errorInfoList.length * 5,
      })
      setResultText(highlightScript(data))
    },
    onError: () => {},
  })

  return (
    <S.GrammarWrapper>
      <S.Diary dangerouslySetInnerHTML={{ __html: resultText }}></S.Diary>
      <S.HorizontalLine />

      <S.ResultContainer>
        <S.Text>
          수정할 부분 <S.Wrong>{data?.errorInfoList?.length || 0}</S.Wrong>개
        </S.Text>
        <S.ResultGroups>
          {isSuccess &&
            data.errorInfoList.map((errorInfo) => (
              <ResultGroup errorInfo={errorInfo} />
            ))}
        </S.ResultGroups>
      </S.ResultContainer>
    </S.GrammarWrapper>
  )
}

export default Grammar
