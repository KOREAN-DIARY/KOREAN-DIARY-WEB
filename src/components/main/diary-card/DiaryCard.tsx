import * as S from './DiaryCard.style'
import DayGroup from 'components/common/day-group/DayGroup'
import { DiaryType } from 'hooks/query/useDiaryListQuery'
import { format } from 'date-fns'

interface DiaryCardProps {
  selectedDate: Date
  diary?: DiaryType
}

const DiaryCard = ({ diary, selectedDate }: DiaryCardProps) => {
  const isDiaryExist = !!diary

  return (
    <S.Container>
      <DayGroup date={format(selectedDate, 'yyyy-MM-dd')} />
      {!isDiaryExist ? (
        <S.DiaryButton
          onClick={() => {
            // TO DO: move to Diary page
            console.log('페이지 이동')
          }}
        >
          일기 작성하기✏️
        </S.DiaryButton>
      ) : (
        <S.DiaryText>{diary.content}</S.DiaryText>
      )}
    </S.Container>
  )
}

export default DiaryCard
