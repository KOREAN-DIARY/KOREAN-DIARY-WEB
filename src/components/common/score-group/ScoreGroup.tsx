import * as S from './ScoreGroup.style'
import { getScoreColor } from 'utils/get-score-color'
import { getScoreText } from 'utils/get-score-text'

interface ScoreProps {
  writing: number
  speaking: number
}

const ScoreGroup = ({ writing, speaking }: ScoreProps) => {
  const score = (writing + speaking) / 2
  const color = getScoreColor(score)

  return (
    <S.ScoreTab>
      <S.Title color={color}>{getScoreText(score)}</S.Title>
      <S.Group>
        <S.Average color={color}>{score}</S.Average>
        <S.Score>점</S.Score>
      </S.Group>
      <S.ScoreGroup>
        <S.Group>
          <S.OutLine>쓰기:</S.OutLine>
          <S.WritingScore>{writing}</S.WritingScore>
          <S.OutLine>점</S.OutLine>
        </S.Group>
        <S.Group>
          <S.OutLine>말하기:</S.OutLine>
          <S.SpeakingScore>{speaking}</S.SpeakingScore>
          <S.OutLine>점</S.OutLine>
        </S.Group>
      </S.ScoreGroup>
    </S.ScoreTab>
  )
}

export default ScoreGroup
