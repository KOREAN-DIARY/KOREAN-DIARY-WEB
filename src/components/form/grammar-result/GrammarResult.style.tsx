import styled from '@emotion/styled'

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem 0rem;

  p {
    display: flex;
    font-weight: bold;
    margin: 0.25rem 0rem;
    align-items: center;
  }
`

export const WrongWord = styled.span`
  font-size: 0.825rem;
  color: var(--red);
`
export const RightWord = styled.span`
  font-size: 0.825rem;
  color: var(--blue);
`
export const Icon = styled.span`
  font-size: 1.125rem;
  margin: 0rem 0.25rem;
`
export const Help = styled.p`
  font-size: 0.75rem;
  padding-left: 0.5rem;
`
