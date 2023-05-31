import { useWritingScoreQuery } from 'hooks/query/useWritingScoreMutation'
import ResultGroup from '../result-group/ResultGroup'
import * as S from './Grammar.style'
import { useDiaryContext } from 'hooks/context/useDiaryContext'

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
    },
    onError: () => {},
  })

  return (
    <S.GrammarWrapper>
      <S.Diary>{diary.content}</S.Diary>
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
