import { useState } from 'react'
import * as S from './ResultGroup.style'
import GrammarResult from '../grammar-result/GrammarResult'

interface ResultGroupProps {
  text: string
}

const ResultGroup = ({ text }: ResultGroupProps) => {
  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled((prev) => !prev)
  }
  return (
    <S.Container>
      <p>{text}</p>
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
          <S.RightText>심혈을 기울여 개발한 맞춤법 검사기.</S.RightText>
          <GrammarResult />
          <GrammarResult />
          <GrammarResult />
        </S.Results>
      )}
    </S.Container>
  )
}

export default ResultGroup
