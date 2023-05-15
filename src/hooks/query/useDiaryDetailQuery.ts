import { useQuery } from 'react-query'
import apiClient, { ResponseType } from 'api/index'
import { DiaryType } from './useDiaryListQuery'

const fetchDiaryDetail = async (date: Date): Promise<DiaryType> => {
  try {
    const { data } = await apiClient.get('/diary/search', { params: { date } })
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

export const useDiaryDetailQuery = (date: Date) => {
  return useQuery(['diaryDetail'], () => fetchDiaryDetail(date), {
    enabled: !!date,
  })
}
