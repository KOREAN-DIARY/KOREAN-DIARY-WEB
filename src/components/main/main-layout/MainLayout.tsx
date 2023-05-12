import Calendar from 'components/main/calendar/Calendar'
import * as S from './MainLayout.style'
import DiaryCard from '../diary-card/DiaryCard'

const sampleDiary = {
  createDt: '2023-05-13',
  content:
    '오늘은 날이 너무 추웠다. 아침으로 샌드위치를 먹었다. 무슨 샌드위치를 먹을 지 고민을 많이 하다가 편의점에서 인기가요 샌드위치를 먹었는데, 딸기잼이 맛이... ',
}

const MainLayout = () => {
  return (
    <S.Container>
      <Calendar />
      <DiaryCard diary={sampleDiary} />
    </S.Container>
  )
}

export default MainLayout
