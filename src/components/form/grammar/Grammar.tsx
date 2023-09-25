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
import Loading from 'components/loading/Loding'

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

const gradeDiary = (data: WritingResponse) => {
  const script = data.script.length
  let score = 0

  // 기본 점수
  if (script < 30) score = 80
  else if (script < 50) score = 90
  else score = 100

  // 감점 요인
  data.errorInfoList.forEach((errorInfo) => {
    const help = errorInfo.help
    if (
      help.includes('입력') ||
      help.includes('겹받침') ||
      help.includes('소리 나는 대로')
    ) {
      score -= 5
    } else if (
      help.includes('외래어') ||
      help.includes('품사') ||
      help.includes('한자어')
    ) {
      score -= 4
    } else if (help.includes('종결')) {
      score -= 2
    } else if (
      help.includes('어미') ||
      help.includes('연결') ||
      help.includes('조사') ||
      help.includes('철자')
    ) {
      score -= 3
    } else {
      score -= 1
    }
  })

  return score
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
        writing: gradeDiary(data),
      })
      setResultText(highlightScript(data))
    },
    onError: () => {},
  })

  return !(data && resultText) ? (
    <Loading />
  ) : (
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
