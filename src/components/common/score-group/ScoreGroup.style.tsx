import styled from '@emotion/styled'

export const ScoreTab = styled.div`
  width: 100%;
  margin: 1rem 0;
  flex-direction: column;
  display: flex;
  gap: 5px;
  align-items: center;
`
export const Title = styled.div<{ color: string }>`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${({ color }) => `var(--${color})`};
`
export const Average = styled.div<{ color: string }>`
  font-size: 18px;
  color: ${({ color }) => `var(--${color})`};
  text-align: center;
  font-weight: bold;
`
export const Score = styled.div`
  font-size: 18px;
  color: var(--dark-grey);
  font-weight: bold;
  text-align: center;
` //점
export const Group = styled.div`
  display: flex;
  text-align: center;
`
export const ScoreGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0.5rem;
`
export const WritingScore = styled.div`
  font-size: 12px;
  color: var(--dark-grey);
  text-align: center;
  font-weight: bold;
`
export const OutLine = styled.div`
  font-size: 12px;
  color: var(--dark-grey);
  text-align: center;
  font-weight: bold;
`
export const SpeakingScore = styled.div`
  font-size: 12px;
  color: var(--dark-grey);
  font-weight: bold;
  text-align: center;
`
