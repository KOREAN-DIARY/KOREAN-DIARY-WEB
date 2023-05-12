import styled from '@emotion/styled'

export const Container = styled.article`
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
  align-items: flex-start;
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
