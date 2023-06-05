import {
  ErrorInfo,
  WritingResponse,
  useWritingScoreQuery,
} from 'hooks/query/useWritingScoreMutation'
import ResultGroup from '../result-group/ResultGroup'
import * as S from './Grammar.style'
import { useDiaryContext } from 'hooks/context/useDiaryContext'
import { useEffect, useState } from 'react'

const Grammar = () => {
  const { diary, setDiary } = useDiaryContext()
  const { data, isSuccess } = useWritingScoreQuery({
    script: diary.content,
    // FIXME: add correct handler
    onSuccess: (data) => {
      setDiary({
        ...diary,
        writing: 100 - data.errorInfoList.length * 5,
      })
      getResult(data)
    },
    onError: () => {},
  })

  const [resultText, setResultText] = useState('')
  const getResult = (data: WritingResponse) => {
    const wrong = data?.errorInfoList.map(
      (err: ErrorInfo) => err.originalString
    )

    let wrongText = data.script
    wrong.map((word) => {
      wrongText = wrongText.replace(
        word,
        `<span style="color: var(--red)">${word}</span>`
      )
    })
    setResultText(wrongText)
  }

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
