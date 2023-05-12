import * as S from './DiaryCard.style'
import DayIcon from 'components/common/day-icon/DayIcon'
import format from 'date-fns/format'
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
  const date = new Date(createDt)
  return (
    <S.Container>
      <DayGroup date="2023-05-13" />
      {content === '' ? <DiaryButton /> : <S.DiaryText>{content}</S.DiaryText>}
    </S.Container>
  )
}

export default DiaryCard
