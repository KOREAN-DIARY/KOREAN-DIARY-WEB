import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 1rem;
  font-weight: bold;
  font-size: 0.875rem;
`
export const Toggle = styled.button`
  display: flex;
  align-items: center;
  color: var(--blue);
  padding-top: 0.5rem;
  padding-left: 1rem;
  font-weight: bold;

  p {
    font-size: 0.75rem;
  }

  span {
    font-size: 1rem;
  }
`

export const Results = styled.div`
  margin: 0.75rem 0.5rem;
  padding: 1rem 0.75rem;
  border: thin solid var(--grey);
`

export const RightText = styled.p`
  color: var(--green);
`
