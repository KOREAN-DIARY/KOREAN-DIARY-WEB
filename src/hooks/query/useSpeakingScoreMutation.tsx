import { audioClient } from 'api/index'
import { ResponseType } from 'api/index'
import { useMutation } from 'react-query'

type SpeakingScore = {
  recognized: string
  score: number
}

const sendAudio = async (body: FormData): Promise<SpeakingScore> => {
  try {
    const { data } = await audioClient.post('/pronunciation', body)
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

export const useSpeakingScoreMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: SpeakingScore) => void
  onError: (error: Error) => void
}) => {
  return useMutation('speaking', sendAudio, {
    retry: 5,
    onSuccess,
    onError,
  })
}
