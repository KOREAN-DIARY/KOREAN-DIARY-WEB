import Stepper from 'components/form/stepper/Stepper'
import * as S from './FormLayout.style'
import Writing from 'components/form/writing/Writing'
import Grammar from 'components/form/grammar/Grammar'
import Listening from 'components/form/listening/Listening'
import Speaking from 'components/form/speaking/Speaking'
import DayGroup from 'components/common/day-group/DayGroup'
import { useNavigate, useSearchParams } from 'react-router-dom'
import queryString from 'query-string'

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

const renderStepComponent = (step: number): React.ReactNode => {
  switch (step) {
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
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const query = queryString.parse(searchParams.toString())
  const step = query?.step ? Number(query.step) : 0

  const changeStep = () => {
    if (step == 4) {
      navigate('/complete')
    } else {
      setSearchParams({ step: (step + 1).toString() })
    }
  }

  return (
    <S.Container>
      <S.HStack>
        <S.CloseButton>
          <S.Icon className="material-icons">close</S.Icon>
        </S.CloseButton>
      </S.HStack>
      <Stepper steps={steps} activeStep={step} />
      <DayGroup date="2023-05-08" />
      {renderStepComponent(step)}
      <S.HStack>
        <S.NextButton onClick={changeStep}>
          <S.Icon className="material-icons">arrow_forward</S.Icon>
        </S.NextButton>
      </S.HStack>
      {/* <CloseModal/> */}
    </S.Container>
  )
}

export default FormLayout
