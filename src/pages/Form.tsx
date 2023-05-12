import BaseLayout from 'components/common/base-layout/BaseLayout'
import AudioPlayer from 'components/form/audio-player/AudioPlayer'
import Stepper from 'components/form/stepper/Stepper'
import { css } from '@emotion/react'

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

const Form = () => {
  return (
    <BaseLayout>
      <Stepper steps={steps} activeStep={1} />
      <AudioPlayer />
    </BaseLayout>
  )
}

export default Form
