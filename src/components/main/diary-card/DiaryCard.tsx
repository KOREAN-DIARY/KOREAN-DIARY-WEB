import * as S from './DiaryCard.style'
import DayIcon from 'components/common/day-icon/DayIcon'
import format from 'date-fns/format'
import DiaryButton from '../diary-button/DiaryButton'

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
      <S.DateContainer>
        <DayIcon day={date.getDay()} />
        <S.DateText>{format(date, 'M월 d일')}</S.DateText>
      </S.DateContainer>
      {content === '' ? <DiaryButton /> : <S.DiaryText>{content}</S.DiaryText>}
    </S.Container>
  )
}

export default DiaryCard
