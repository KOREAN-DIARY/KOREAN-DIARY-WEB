import React from 'react'
import * as S from './BaseLayout.style'
import Header from 'components/common/header/Header'

interface BaseLayoutProps {
  children: React.ReactNode
  hasPadding?: boolean
}

const BaseLayout = ({ children, hasPadding = true }: BaseLayoutProps) => {
  return (
    <S.Container>
      <Header />
      <S.Content hasPadding={hasPadding}>{children}</S.Content>
    </S.Container>
  )
}

export default BaseLayout
