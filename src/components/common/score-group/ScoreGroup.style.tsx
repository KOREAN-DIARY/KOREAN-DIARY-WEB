import styled from '@emotion/styled'

export const ScoreTab = styled.div`
  width: 262px;
  height: 176px;
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
  margin-top: 40px;
`
export const Average = styled.div<{ color: string }>`
  font-size: 18px;
  color: ${({ color }) => `var(--${color})`};
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
`
export const Score = styled.div`
  font-size: 18px;
  color: var(--dark-grey);
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
` //점
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 5px;
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
