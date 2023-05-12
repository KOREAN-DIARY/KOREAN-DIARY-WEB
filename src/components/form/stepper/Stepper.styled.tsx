import styled from '@emotion/styled'

export const StepperWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1rem 0;
  & > .line {
    position: absolute;
    top: 2.5rem;
    left: 1rem;
    width: calc(100% - 3rem);
    height: 1px;
    background-color: var(--grey);
    z-index: -1;
  }
`

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const StepButton = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isActive }) => (isActive ? `var(--blue)` : `var(--grey)`)};
  color: var(--white);
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 100%;
`

export const StepText = styled.p<{ isActive: boolean }>`
  font-size: 10px;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? `var(--blue)` : `var(--grey)`)};
`
