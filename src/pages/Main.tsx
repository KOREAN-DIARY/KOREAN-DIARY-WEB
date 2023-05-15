import BaseLayout from 'components/common/base-layout/BaseLayout'
import MainLayout from 'components/main/main-layout/MainLayout'
import { useDiaryListQuery } from 'hooks/query/useDiaryListQuery'

const Main = () => {
  const { data } = useDiaryListQuery({})

  return (
    <BaseLayout>
      <MainLayout />
    </BaseLayout>
  )
}

export default Main
