import * as S from './DiaryCard.style'
import DiaryButton from '../diary-button/DiaryButton'
import DayGroup from 'components/common/day-group/DayGroup'

interface DiaryCardProps {
  diary: {
    content: string
    createDt: string
  }
}

const DiaryCard = ({ diary }: DiaryCardProps) => {
  const { createDt, content } = diary
  return (
    <S.Container>
      <DayGroup date={createDt} />
      {content === '' ? <DiaryButton /> : <S.DiaryText>{content}</S.DiaryText>}
    </S.Container>
  )
}

export default DiaryCard
