import { useNavigate } from 'react-router-dom'
import * as S from './Complete.style'
import ScoreGroup from 'components/common/score-group/ScoreGroup'

const Complete = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Title>일기 작성 완료🌟</S.Title>
      <S.Border>
        <ScoreGroup writing={100} speaking={90} />
      </S.Border>
      <S.ToList onClick={() => navigate('/')}>목록으로</S.ToList>
    </S.Container>
  )
}

export default Complete
