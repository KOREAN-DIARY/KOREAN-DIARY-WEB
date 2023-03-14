import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const markDate = (date: Date) => {
  const today = new Date()
  if (today.getDate() === date.getDate()) {
    return 'highlight'
  }
}

const DiaryCalendar = () => {
  return (
    <div>
      <Calendar tileClassName={({ date }) => markDate(date) || 's'} />
    </div>
  )
}

export default DiaryCalendar
