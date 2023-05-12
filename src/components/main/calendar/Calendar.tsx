import Calendar from 'react-calendar'
import * as S from './Calendar.style'
import isEqual from 'date-fns/isEqual'

const markDate = (date: Date) => {
  const markedDate = new Date('2023-05-02T00:00:00')
  if (isEqual(markedDate, date)) {
    return 'highlight'
  }
}

const DiaryCalendar = () => {
  return (
    <S.CalendarWrapper>
      <Calendar
        goToRangeStartOnSelect={false}
        tileClassName={({ date }) => markDate(date) || ''}
      />
    </S.CalendarWrapper>
  )
}

export default DiaryCalendar
