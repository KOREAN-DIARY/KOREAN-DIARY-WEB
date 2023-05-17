import Calendar from 'components/main/calendar/Calendar'
import * as S from './MainLayout.style'
import DiaryCard from '../diary-card/DiaryCard'
import { DiaryType } from 'hooks/query/useDiaryListQuery'

interface MainLayoutProps {
  diaryList: DiaryType[]
}

const MainLayout = ({ diaryList }: MainLayoutProps) => {
  return (
    <S.Container>
      <Calendar diaryList={diaryList} />
      <DiaryCard />
    </S.Container>
  )
}

export default MainLayout
