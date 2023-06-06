import { useNavigate } from 'react-router-dom'
import * as S from './Complete.style'
import ScoreGroup from 'components/common/score-group/ScoreGroup'

interface CompleteProps {
  speaking: number
  writing: number
}

const Complete = ({ speaking, writing }: CompleteProps) => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Title>일기 작성 완료 🌟</S.Title>
      <ScoreGroup writing={writing} speaking={speaking} />
      <S.ToList onClick={() => navigate('/')}>목록으로</S.ToList>
    </S.Container>
  )
}

export default Complete
