import {
  ErrorInfo,
  useWritingScoreMutation,
} from 'hooks/query/useWritingScoreMutation'
import ResultGroup from '../result-group/ResultGroup'
import * as S from './Grammar.style'
import { useDiaryContext } from 'hooks/context/useDiaryContext'
import { useEffect, useState } from 'react'

const Grammar = () => {
  const [errorList, setErrorList] = useState<ErrorInfo[]>([])
  const {
    diary: { content },
  } = useDiaryContext()
  const { mutateAsync, isSuccess } = useWritingScoreMutation({
    // FIXME: add correct handler
    onSuccess: () => {},
    onError: () => {},
  })

  const createWritingScore = async (script: string) => {
    const result = await mutateAsync({ script })
    setErrorList(result.errorInfoList)
  }

  useEffect(() => {
    content && createWritingScore(content)
  }, [content])

  return (
    <S.GrammarWrapper>
      <S.Diary>{content}</S.Diary>
      <S.HorizontalLine />
      {isSuccess && (
        <S.ResultContainer>
          <S.Text>
            수정할 문장 <S.Wrong>2</S.Wrong>개
          </S.Text>
          <S.ResultGroups>
            <ResultGroup text="1. 심여를 기울여 만든 마춤뻡 검사기." />
            <ResultGroup text="2. 맛춤법 쫌 실수하지 말아봐." />
          </S.ResultGroups>
        </S.ResultContainer>
      )}
    </S.GrammarWrapper>
  )
}

export default Grammar
