import Calendar from 'react-calendar'
import * as S from './Calendar.style'
import format from 'date-fns/format'
import { getScoreColor } from 'utils/get-score-color'
import { exit } from 'process'

interface DiaryType {
  createDt: string
  score: number
}

const markDate = (date: Date, markedDateList: DiaryType[]) => {
  const formattedDate = format(date, 'yyyy-MM-dd')
  const dateList = markedDateList.map(({ createDt }) => createDt)
  const diaryIndex = dateList.findIndex((d) => d == formattedDate)
  if (diaryIndex > -1) {
    console.log(getScoreColor(markedDateList[diaryIndex].score))
    return getScoreColor(markedDateList[diaryIndex].score)
  }
}

const diaryList: DiaryType[] = [
  { createDt: '2023-05-02', score: 10 },
  { createDt: '2023-05-05', score: 25 },
  { createDt: '2023-05-07', score: 40 },
  { createDt: '2023-05-08', score: 60 },
  { createDt: '2023-05-10', score: 80 },
  { createDt: '2023-05-12', score: 93 },
]

const DiaryCalendar = () => {
  return (
    <S.CalendarWrapper>
      <Calendar
        goToRangeStartOnSelect={false}
        tileClassName={({ date }) =>
          markDate(date, diaryList)
            ? 'highlight ' + markDate(date, diaryList)
            : ''
        }
      />
    </S.CalendarWrapper>
  )
}

export default DiaryCalendar
