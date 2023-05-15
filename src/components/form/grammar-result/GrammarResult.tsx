import React from 'react'
import * as S from './GrammarResult.style'

const GrammerResult = () => {
  return (
    <S.ResultWrapper>
      <p>
        <S.WrongWord>심여를</S.WrongWord>
        <S.Icon className="material-icons">arrow_forward</S.Icon>
        <S.RightWord>심혈을</S.RightWord>
      </p>
      <p>
        <S.Icon className="material-icons">error_outline</S.Icon>
        맞춤법
      </p>
      <S.Help>입력 오류입니다.</S.Help>
    </S.ResultWrapper>
  )
}

export default GrammerResult
