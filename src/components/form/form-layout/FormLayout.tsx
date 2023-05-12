import Stepper from 'components/form/stepper/Stepper'
import * as S from './FormLayout.style'
import Writing from 'components/form/writing/Writing'
import Grammar from 'components/form/grammar/Grammar'
import Listening from 'components/form/listening/Listening'
import Speaking from 'components/form/speaking/Speaking'
import DayIcon from 'components/common/day-icon/DayIcon'
import CloseModal from 'components/form/close-modal/CloseModal'
import DayGroup from 'components/common/day-group/DayGroup'

const activeStep = 1

const steps = [
  {
    code: 1,
    text: '일기쓰기',
  },
  {
    code: 2,
    text: '문법 확인',
  },
  {
    code: 3,
    text: '듣기',
  },
  {
    code: 4,
    text: '말하기',
  },
]

const renderStepComponent = (activeStep: number): React.ReactNode => {
  switch (activeStep) {
    case 1:
      return <Writing />
    case 2:
      return <Grammar />
    case 3:
      return <Listening />
    case 4:
      return <Speaking />
  }
}

const FormLayout = () => {
  return (
    <S.Container>
      <S.HStack>
        <S.CloseButton>
          <S.Icon className="material-icons">close</S.Icon>
        </S.CloseButton>
      </S.HStack>
      <Stepper steps={steps} activeStep={activeStep} />
      <DayGroup date="2023-05-08" />
      {renderStepComponent(activeStep)}
      <S.HStack>
        <S.NextButton>
          <S.Icon className="material-icons">arrow_forward</S.Icon>
        </S.NextButton>
      </S.HStack>
      {/* <CloseModal/> */}
    </S.Container>
  )
}

export default FormLayout
