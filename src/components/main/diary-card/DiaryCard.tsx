import * as S from './DiaryCard.style'
import DayGroup from 'components/common/day-group/DayGroup'
import { format } from 'date-fns'
import { useDiaryContext } from 'hooks/context/useDiaryContext'

const DiaryCard = () => {
  const { selectedDiary } = useDiaryContext()
  const isDiaryExist = selectedDiary.content
  const date = isDiaryExist ? new Date(selectedDiary.date) : new Date()

  return (
    <S.Container>
      <DayGroup date={format(date, 'yyyy-MM-dd')} />
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
        <S.DiaryText>{selectedDiary.content}</S.DiaryText>
      )}
    </S.Container>
  )
}

export default DiaryCard
