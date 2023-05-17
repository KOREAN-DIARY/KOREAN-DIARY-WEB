import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1.5625rem;
`
export const Title = styled.div`
  color: var(--dark-grey);
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`
export const ToList = styled.button`
  border: solid;
  border-radius: 1.25rem;
  border-color: var(--grey);
  font-size: 1.125rem;
  font-weight: bolder;
  color: var(--grey);
  width: 11.25rem;
  height: 3.25rem;
  margin-top: 0.9375rem;
`
export const Border = styled.div`
  border: solid;
  border-width: 0.125rem;
  border-color: var(--grey);
`
