import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 25px;
`
export const Title = styled.div`
  color: var(--dark-grey);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`
export const ScoreTab = styled.div`
  border: solid;
  border-color: var(--grey);
  width: 262px;
  height: 176px;
  flex-direction: column;
  display: flex;
  gap: 5px;
`
export const ConTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: var(--blue);
  margin-top: 40px;
`
export const ConA = styled.div`
  font-size: 18px;
  color: var(--dark-grey);
  text-align: center;
  font-weight: bold;
`
export const ConS1 = styled.div`
  font-size: 12px;
  color: var(--dark-grey);
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
`
export const ConS2 = styled.div`
  font-size: 12px;
  color: var(--dark-grey);
  font-weight: bold;
  text-align: center;
`
export const ToList = styled.button`
  border: solid;
  border-radius: 20px;
  border-color: var(--grey);
  font-size: 18px;
  font-weight: bolder;
  color: var(--grey);
  width: 180px;
  height: 52px;
  margin-top: 15px;
`
