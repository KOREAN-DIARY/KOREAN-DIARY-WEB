import BaseLayout from 'components/common/base-layout/BaseLayout'
import MainLayout from 'components/main/main-layout/MainLayout'
import { useDiaryDetailQuery } from 'hooks/query/useDiaryDetailQuery'
import { useDiaryListQuery } from 'hooks/query/useDiaryListQuery'

const Main = () => {
  const { data, isSuccess } = useDiaryListQuery({
    onSuccess: () => {
      return data
    },
  })
  const { data: diary } = useDiaryDetailQuery(new Date())

  return (
    <BaseLayout>
      {isSuccess && <MainLayout diaryList={data} todayDiary={diary} />}
    </BaseLayout>
  )
}

export default Main
