import React from 'react'
import * as S from './BaseLayout.style'
import Header from 'components/common/header/Header'

interface BaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  )
}

export default BaseLayout