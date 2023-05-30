import { audioClient } from 'api/index'
import { ResponseType } from 'api/index'
import { useMutation } from 'react-query'

type SpeakingResponse = {
  recognized: string
  score: number
}

const sendAudio = async (body: FormData): Promise<SpeakingResponse> => {
  try {
    const { data } = await audioClient.post('/speaking', body)
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

export const useSpeakingScoreMutation = ({
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
