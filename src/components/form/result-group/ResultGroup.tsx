import { useState } from 'react'
import * as S from './ResultGroup.style'
import GrammarResult from '../grammar-result/GrammarResult'
import { ErrorInfo } from 'hooks/query/useWritingScoreMutation'

interface ResultGroupProps {
  errorInfo: ErrorInfo
}

const ResultGroup = ({ errorInfo }: ResultGroupProps) => {
  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled((prev) => !prev)
  }
  return (
    <S.Container>
      <p>{errorInfo.originalString}</p>
      <S.Toggle onClick={handleToggle}>
        <p>
          {toggled ? '올바른 문장 접기' : '올바른 문장 보기'}{' '}
          <span className="material-icons">
            {toggled ? 'expand_less' : 'expand_more'}
          </span>
        </p>
      </S.Toggle>
      {toggled && (
        <S.Results>
          <S.RightText>{errorInfo.correctWord}</S.RightText>
          <GrammarResult errorInfo={errorInfo} />
        </S.Results>
      )}
    </S.Container>
  )
}

export default ResultGroup
