import * as S from './DayIcon.style'

type DayIconProps = {
  day: number
}

const dayTextList: string[] = ['일', '월', '화', '수', '목', '금', '토']

const renderDayColor = (day: number): string => {
  switch (day) {
    case 0:
      return 'purple'
    case 1:
      return 'red'
    case 2:
      return 'orange'
    case 3:
      return 'yellow'
    case 4:
      return 'green'
    case 5:
      return 'skyblue'
    case 6:
      return 'blue'

    default:
      return ''
  }
}

const DayIcon = ({ day }: DayIconProps) => (
  <S.DayIcon color={renderDayColor(day)}>{dayTextList[day]}</S.DayIcon>
)

export default DayIcon
