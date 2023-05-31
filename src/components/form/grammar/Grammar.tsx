import { useWritingScoreMutation } from 'hooks/query/useWritingScoreMutation'
import ResultGroup from '../result-group/ResultGroup'
import * as S from './Grammar.style'

const Grammar = () => {
  const { mutate, isSuccess } = useWritingScoreMutation({
    // FIXME: add correct handler
    onSuccess: () => {},
    onError: () => {},
  })

  const createWritingScore = async (script: string) => {
    const result = await mutate({ script })
    return result
  }

  return (
    <S.GrammarWrapper>
      <S.Diary>
        오늘의 일기입니다. <S.Wrong>심여를 기울여 만든 마춤뻡 검사기.</S.Wrong>{' '}
        만들었는데 과연 제대로 될 지는 모르겠다. 아 너무 졸리다. 진짜 졸리다.
        종강하면 하루종일 잔다 진짜. 근데 종강하려면 아직도 한 달이나 남았네. 이
        패턴으로 한 달을 더 살아야 된다고?{' '}
        <S.Wrong>맛춤법 쫌 실수하지 말아봐.</S.Wrong>
      </S.Diary>
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
