import { useQuery } from 'react-query'
import apiClient from 'api/index'
import { DiaryType } from './useDiaryListQuery'
import format from 'date-fns/format'

const fetchDiaryDetail = async (date: String): Promise<DiaryType> => {
  try {
    const { data } = await apiClient.get('/diary/search', { params: { date } })
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

export const useDiaryDetailQuery = (date: Date) => {
  const formattedDate = format(date, 'yyyy-MM-dd')
  return useQuery(
    ['diaryDetail', date],
    () => fetchDiaryDetail(formattedDate),
    {
      enabled: !!date,
    }
  )
}
