import styled from '@emotion/styled'

export const DayIcon = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  background-color: ${({ color }) => `var(--${color})`};
`
