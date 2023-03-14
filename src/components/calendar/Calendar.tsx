import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import * as S from './Calendar.style'

const markDate = (date: Date) => {
  // TODO: selected date array
  const markedDate = new Date('2023-03-08')
  if (markedDate.getDate() === date.getDate()) {
    return 'highlight'
  }
}

const DiaryCalendar = () => {
  return (
    <S.CalendarWrapper>
      <Calendar tileClassName={({ date }) => markDate(date) || 's'} />
    </S.CalendarWrapper>
  )
}

export default DiaryCalendar
