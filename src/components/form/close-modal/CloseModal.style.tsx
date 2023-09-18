import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 21.875rem;
  padding: 2rem 1rem;
  gap: 1rem;
  background-color: var(--white);
  border-radius: 0.5rem;
`
export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: -68px;
  left: -1rem;
`
export const NoBtn = styled.button`
  background-color: var(--white);
  border-color: var(--blue);
  border: solid;
  color: var(--blue);
  width: 83px;
  height: 31px;
`
export const YesBtn = styled.button`
  background-color: var(--blue);
  color: var(--white);
  width: 83px;
  height: 31px;
`

export const Icon = styled.span`
  color: var(--dark-grey);
  width: 2rem;
  height: 2rem;
`

export const Title = styled.div`
  color: var(--dark-grey);
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`
export const Content = styled.div`
  color: var(--dark-grey);
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 1.875rem;
  background-color: var(--white);
`
