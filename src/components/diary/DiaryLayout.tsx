import React from 'react'
import * as S from './DiaryLayout.style'
import ScoreGroup from 'components/common/score-group/ScoreGroup'
import DayGroup from 'components/common/day-group/DayGroup'
import GrammarResult from 'components/form/grammar-result/GrammarResult'
import Grammar from 'components/form/grammar/Grammar'
import { GrammarWrapper } from 'components/form/grammar/Grammar.style'

const DiaryLayout = () => (
  <S.Container>
    <S.DayFrame>
      <DayGroup date={'2023-12-18'} />
    </S.DayFrame>
    <S.Border>
      <ScoreGroup writing={100} speaking={90} />
    </S.Border>
    <Grammar />
  </S.Container>
)

export default DiaryLayout
