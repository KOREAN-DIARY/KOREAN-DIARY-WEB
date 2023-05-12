import React from 'react'
import * as S from './dayIcon.style'

type DayIconProps = {
  day: string
}

const dayIcon: React.FC<DayIconProps> = ({ day }) => {
  return (
    <S.DayIcon>
      <div className={day}>
        {(() => {
          switch (day) {
            case 'mon':
              return <p>월</p>
            case 'tue':
              return <p>화</p>
            case 'wed':
              return <p>수</p>
            case 'thu':
              return <p>목</p>
            case 'fri':
              return <p>금</p>
            case 'sat':
              return <p>토</p>
            case 'sun':
              return <p>일</p>
          }
        })()}
      </div>
    </S.DayIcon>
  )
}

export default dayIcon
