import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  gap: 0.5rem;
  width: 100%;
`

export const Button = styled.button`
  color: var(--dark-grey);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Score = styled.div<{ color: string }>`
  display: flex;
  margin-left: auto;
  & > span {
    color: ${({ color }) => `var(--${color})`};
  }
`
