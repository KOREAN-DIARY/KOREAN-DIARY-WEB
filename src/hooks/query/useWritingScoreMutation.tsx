import apiClient, { audioClient } from 'api/index'
import { ResponseType } from 'api/index'
import { useMutation } from 'react-query'

type ErrorInfo = {
  help: string
  originalString: string
  correctWord: string
}

type WritingResponse = {
  script: string
  errorInfoList: ErrorInfo[]
}

const sendAudio = async (body: {
  script: string
}): Promise<WritingResponse> => {
  try {
    const { data } = await apiClient.post<ResponseType<WritingResponse>>(
      '/writing',
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
  onSuccess: (data: WritingResponse) => void
  onError: (error: Error) => void
}) => {
  return useMutation('writing', sendAudio, {
    retry: 5,
    onSuccess,
    onError,
  })
}
