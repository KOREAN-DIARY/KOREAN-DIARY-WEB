import BaseLayout from 'components/common/base-layout/BaseLayout'
import Complete from '../complete/Complete'
import * as S from './CompleteLayout.style'
import { useSearchParams } from 'react-router-dom'
import queryString from 'query-string'

const CompleteLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = queryString.parse(searchParams.toString())
  const { speaking, writing } = query

  return (
    <BaseLayout>
      <S.CompleteWrapper>
        <Complete speaking={Number(speaking)} writing={Number(writing)} />
      </S.CompleteWrapper>
    </BaseLayout>
  )
}

export default CompleteLayout
