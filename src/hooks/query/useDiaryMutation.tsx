import apiClient from 'api/index'
import { ResponseType } from 'api/index'
import { useMutation } from 'react-query'

export type DiaryResponseType = {
  id: number
  content: string
  date: string
  writing: number
  speaking: number
}

export type DiaryRequestType = {
  content: string
  date: string
  writing: number
  speaking: number
}

const sendDiary = async (
  body: DiaryRequestType
): Promise<DiaryResponseType> => {
  try {
    const { data } = await apiClient.post<ResponseType<DiaryResponseType>>(
      '/diary',
      body
    )
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

export const useWritingScoreMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: DiaryResponseType) => void
  onError: (error: Error) => void
}) => {
  return useMutation('diary', sendDiary, {
    retry: 5,
    onSuccess,
    onError,
  })
}
