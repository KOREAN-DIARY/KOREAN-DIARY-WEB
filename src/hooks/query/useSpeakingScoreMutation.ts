import apiClient, { audioClient } from 'api/index'
import { ResponseType } from 'api/index'
import { useMutation } from 'react-query'

type SpeakingResponse = {
  recognized: string
  score: number
}

type SpeakingRequest = {
  script: string
  audio: string
}

const sendAudio = async (body: SpeakingRequest): Promise<SpeakingResponse> => {
  try {
    const { data } = await apiClient.post<ResponseType<SpeakingResponse>>(
      '/speaking',
      body
    )
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

export const useNewSpeakingScoreMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: SpeakingResponse) => void
  onError: (error: Error) => void
}) => {
  return useMutation('speaking', sendAudio, {
    retry: 5,
    onSuccess,
    onError,
  })
}
