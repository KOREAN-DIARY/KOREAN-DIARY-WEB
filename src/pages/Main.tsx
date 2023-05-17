import BaseLayout from 'components/common/base-layout/BaseLayout'
import MainLayout from 'components/main/main-layout/MainLayout'
import DiaryProvider from 'hooks/context/useDiaryContext'
import { useDiaryListQuery } from 'hooks/query/useDiaryListQuery'

const Main = () => {
  const { data, isSuccess } = useDiaryListQuery({
    onSuccess: () => {
      return data
    },
  })

  return (
    <DiaryProvider>
      <BaseLayout>{isSuccess && <MainLayout diaryList={data} />}</BaseLayout>
    </DiaryProvider>
  )
}

export default Main
