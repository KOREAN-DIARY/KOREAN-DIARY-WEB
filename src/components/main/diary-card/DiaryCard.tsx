import * as S from './DiaryCard.style'
import DayGroup from 'components/common/day-group/DayGroup'
import { format } from 'date-fns'
import { useDiaryContext } from 'hooks/context/useDiaryContext'
import { useNavigate } from 'react-router-dom'

const DiaryCard = () => {
  const { selectedDiary } = useDiaryContext()
  const isDiaryExist = selectedDiary.content
  const date = isDiaryExist ? new Date(selectedDiary.date) : new Date()
  const navigate = useNavigate()

  return (
    <S.Container>
      <DayGroup date={format(date, 'yyyy-MM-dd')} />
      {!isDiaryExist ? (
        <S.DiaryButton onClick={() => navigate('/form?step=1')}>
          일기 작성하기 ✏️
        </S.DiaryButton>
      ) : (
        <S.DiaryText>{selectedDiary.content}</S.DiaryText>
      )}
    </S.Container>
  )
}

export default DiaryCard
