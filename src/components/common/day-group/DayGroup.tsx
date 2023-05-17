import DayIcon from 'components/common/day-icon/DayIcon'
import * as S from './DayGroup.style'
const DayGroup = ({ date }: { date: string }) => {
  const dateObj = new Date(date)
  return (
    <S.Container>
      <DayIcon day={dateObj.getDay()} />
      <S.DayText>
        <S.Year>{dateObj.getFullYear()}년</S.Year>
        <S.Date>
          {dateObj.getMonth() + 1}월 {dateObj.getDate()}일
        </S.Date>
      </S.DayText>
    </S.Container>
  )
}

export default DayGroup
