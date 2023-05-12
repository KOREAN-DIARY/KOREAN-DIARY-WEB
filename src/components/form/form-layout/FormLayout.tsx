import Stepper from 'components/form/stepper/Stepper'
import * as S from './FormLayout.style'

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

const FormLayout = () => {
  return (
    <S.container>
      <S.HStack>
        <S.CloseIcon className="material-icons">close</S.CloseIcon>
      </S.HStack>
      <Stepper steps={steps} activeStep={1} />
    </S.container>
  )
}

export default FormLayout
