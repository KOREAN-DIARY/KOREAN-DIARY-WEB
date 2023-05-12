import styled from '@emotion/styled'

export const Container = styled.section`
  flex: 1;
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`

export const CloseButton = styled.button`
  cursor: pointer;
`

export const Icon = styled.span`
  color: var(--dark-grey);
`

export const HStack = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const NextButton = styled.button`
  cursor: pointer;
`
