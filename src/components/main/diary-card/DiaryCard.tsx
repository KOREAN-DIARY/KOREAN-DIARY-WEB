import * as S from './DiaryCard.style'
import DiaryButton from '../diary-button/DiaryButton'
import DayGroup from 'components/common/day-group/DayGroup'
import { DiaryType } from 'hooks/query/useDiaryListQuery'

interface DiaryCardProps {
  diary: DiaryType
}

const DiaryCard = ({ diary }: DiaryCardProps) => {
  const { date, content } = diary
  console.log(diary)
  return (
    <S.Container>
      <DayGroup date={date} />
      {content === '' ? <DiaryButton /> : <S.DiaryText>{content}</S.DiaryText>}
    </S.Container>
  )
}

export default DiaryCard
