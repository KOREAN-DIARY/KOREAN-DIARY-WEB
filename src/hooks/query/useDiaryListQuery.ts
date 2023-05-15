import { useQuery } from 'react-query'
import apiClient from 'api/index'

export interface ResponseType<T> {
  code: number
  message: string
  http_status: number
  data: T
}

export type DiaryType = {
  id: number
  content: string
  date: string
  writing: number
  speaking: number
}

const fetchDiaryList = async (): Promise<ResponseType<DiaryType[]>> => {
  try {
    const { data } = await apiClient.get('/diary')
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

const onError = () => {
  console.log('get diary list error')
}

export const useDiaryListQuery = ({
  onSuccess = () => {},
}: {
  onSuccess?: (diaryList: DiaryType[]) => void
}) => {
  return useQuery('diaryList', fetchDiaryList, {
    onError,
    onSuccess,
  })
}
