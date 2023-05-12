import React from 'react'
import * as S from './DiaryCard.style'
import DayIcon from 'components/common/day-icon/dayIcon'
import format from 'date-fns/format'
import DiaryButton from '../diary-button/DiaryButton'

interface DiaryCardProps {
  date: Date
  diary: String
}

const DiaryCard = ({ date, diary }: DiaryCardProps) => {
  return (
    <S.Container>
      <S.DateContainer>
        <DayIcon day={date.getDay()} />
        <S.DateText>{format(date, 'M월 d일')}</S.DateText>
      </S.DateContainer>
      {diary === '' ? <DiaryButton /> : <S.DiaryText>{diary}</S.DiaryText>}
    </S.Container>
  )
}

export default DiaryCard
