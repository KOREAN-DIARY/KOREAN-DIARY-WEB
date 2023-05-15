import Calendar from 'components/main/calendar/Calendar'
import * as S from './MainLayout.style'
import DiaryCard from '../diary-card/DiaryCard'
import { DiaryType } from 'hooks/query/useDiaryListQuery'
import { useState } from 'react'

interface MainLayoutProps {
  diaryList: DiaryType[]
  todayDiary?: DiaryType
}

const MainLayout = ({ diaryList, todayDiary }: MainLayoutProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <S.Container>
      <Calendar diaryList={diaryList} selectedDate={selectedDate} />
      <DiaryCard diary={todayDiary} selectedDate={selectedDate} />
    </S.Container>
  )
}

export default MainLayout
