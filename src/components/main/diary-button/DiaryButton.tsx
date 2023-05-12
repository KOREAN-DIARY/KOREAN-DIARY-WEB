import React from 'react'
import * as S from './DiaryButton.style'

const DiaryButton = () => {
  return (
    <S.DiaryButton
      onClick={() => {
        // TO DO: move to Diary page
        console.log('페이지 이동')
      }}
    >
      오늘의 일기 작성하기✏️
    </S.DiaryButton>
  )
}

export default DiaryButton
