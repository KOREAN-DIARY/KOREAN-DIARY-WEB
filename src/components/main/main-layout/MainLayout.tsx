import Calendar from 'components/main/calendar/Calendar'
import * as S from './MainLayout.style'
import DiaryCard from '../diary-card/DiaryCard'
import { DiaryType } from 'hooks/query/useDiaryListQuery'

interface MainLayoutProps {
  diaryList: DiaryType[]
  todayDiary?: DiaryType
  selectedDate: Date
  onSelectDate: (date: Date) => void
}

const MainLayout = ({
  diaryList,
  todayDiary,
  selectedDate,
  onSelectDate,
}: MainLayoutProps) => {
  return (
    <S.Container>
      <Calendar diaryList={diaryList} onSelectDate={onSelectDate} />
      <DiaryCard diary={todayDiary} selectedDate={selectedDate} />
    </S.Container>
  )
}

export default MainLayout
