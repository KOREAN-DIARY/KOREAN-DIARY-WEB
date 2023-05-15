import BaseLayout from 'components/common/base-layout/BaseLayout'
import MainLayout from 'components/main/main-layout/MainLayout'
import { useDiaryListQuery } from 'hooks/query/useDiaryListQuery'

const Main = () => {
  const { data, isSuccess } = useDiaryListQuery({
    onSuccess: () => {
      return data
    },
  })

  return <BaseLayout>{isSuccess && <MainLayout diaryList={data} />}</BaseLayout>
}

export default Main
