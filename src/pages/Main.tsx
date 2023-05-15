import BaseLayout from 'components/common/base-layout/BaseLayout'
import MainLayout from 'components/main/main-layout/MainLayout'
import { useDiaryDetailQuery } from 'hooks/query/useDiaryDetailQuery'
import { useDiaryListQuery } from 'hooks/query/useDiaryListQuery'
import { useState } from 'react'

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { data, isSuccess } = useDiaryListQuery({
    onSuccess: () => {
      return data
    },
  })
  const { data: diary } = useDiaryDetailQuery(selectedDate)

  const onSelectDate = (date: Date) => setSelectedDate(date)

  return (
    <BaseLayout>
      {isSuccess && (
        <MainLayout
          diaryList={data}
          todayDiary={diary}
          selectedDate={selectedDate}
          onSelectDate={onSelectDate}
        />
      )}
    </BaseLayout>
  )
}

export default Main
