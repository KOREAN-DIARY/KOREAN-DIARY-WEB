import * as S from './Stepper.styled'

interface StepperProps {
  steps: {
    code: number
    text: string
  }[]
  activeStep: number
}

const Stepper = ({ steps, activeStep }: StepperProps) => {
  return (
    <S.StepperWrapper>
      <div className="line" />
      {steps?.map(({ code, text }) => (
        <S.Step>
          <S.StepButton isActive={code == activeStep}>{code}</S.StepButton>
          <S.StepText isActive={code == activeStep}>{text}</S.StepText>
        </S.Step>
      ))}
    </S.StepperWrapper>
  )
}

export default Stepper
