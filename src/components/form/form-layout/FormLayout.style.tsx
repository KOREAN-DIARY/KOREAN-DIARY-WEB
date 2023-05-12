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

export const DateContainer = styled.article`
  display: flex;
  width: 100%;
  gap: 0.75rem;
  margin: 1rem 0;
`

export const DayText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  gap: 0.25rem;
`

export const Year = styled.p`
  color: var(--grey);
  font-size: 0.75rem;
`

export const Date = styled.p`
  color: var(--dark-grey);
  font-size: 1rem;
`
