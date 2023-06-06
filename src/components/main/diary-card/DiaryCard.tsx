import * as S from './DiaryCard.style'
import DayGroup from 'components/common/day-group/DayGroup'
import { format } from 'date-fns'
import { useDiaryContext } from 'hooks/context/useDiaryContext'
import { useNavigate } from 'react-router-dom'

const DiaryCard = () => {
  const { diary } = useDiaryContext()
  const isDiaryExist = diary.content
  const date = diary.date || format(new Date(), 'yyyy-MM-dd')
  const navigate = useNavigate()

  return (
    <S.Container>
      <DayGroup date={date} />
      {!isDiaryExist ? (
        <S.DiaryButton onClick={() => navigate('/form?step=1')}>
          일기 작성하기 ✏️
        </S.DiaryButton>
      ) : (
        <S.DiaryText onClick={() => navigate(`/diary/${diary.date}`)}>
          {diary.content}
        </S.DiaryText>
      )}
    </S.Container>
  )
}

export default DiaryCard
