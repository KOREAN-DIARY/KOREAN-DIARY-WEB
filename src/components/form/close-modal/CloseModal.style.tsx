import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20.625rem;
  width: 21.875rem;
  background-color: var(--white);
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
`
export const Content = styled.div`
  color: var(--dark-grey);
  font-size: 0.625rem;
  font-weight: bold;
  text-align: center;
`
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 1.875rem;
  background-color: var(--white);
`
