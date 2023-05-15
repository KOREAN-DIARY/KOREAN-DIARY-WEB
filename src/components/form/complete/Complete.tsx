import * as S from './Complete.style'
import ScoreGroup from 'components/common/score-group/ScoreGroup'

const Complete = () => (
  <S.Container>
    <S.Title>일기 작성 완료🌟</S.Title>
    <ScoreGroup writing={100} speaking={90} />
    <S.ToList>목록으로</S.ToList>
  </S.Container>
)

export default Complete
