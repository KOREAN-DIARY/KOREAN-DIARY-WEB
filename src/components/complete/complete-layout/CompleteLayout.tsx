import BaseLayout from 'components/common/base-layout/BaseLayout'
import Complete from '../complete/Complete'
import * as S from './CompleteLayout.style'

const CompleteLayout = () => {
  return (
    <BaseLayout>
      <S.CompleteWrapper>
        <Complete />
      </S.CompleteWrapper>
    </BaseLayout>
  )
}

export default CompleteLayout
