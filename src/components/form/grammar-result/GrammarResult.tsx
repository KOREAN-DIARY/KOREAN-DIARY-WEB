import React from 'react'
import * as S from './GrammarResult.style'
import { ErrorInfo } from 'hooks/query/useWritingScoreMutation'

const GrammarResult = ({ errorInfo }: { errorInfo: ErrorInfo }) => {
  return (
    <S.ResultWrapper>
      <p>
        <S.WrongWord>{errorInfo.originalString}</S.WrongWord>
        <S.Icon className="material-icons">arrow_forward</S.Icon>
        <S.RightWord>{errorInfo.correctWord}</S.RightWord>
      </p>
      {/* <p>
        <S.Icon className="material-icons">error_outline</S.Icon>
        맞춤법
      </p> */}
      <S.Help>{errorInfo.help}</S.Help>
    </S.ResultWrapper>
  )
}

export default GrammarResult
