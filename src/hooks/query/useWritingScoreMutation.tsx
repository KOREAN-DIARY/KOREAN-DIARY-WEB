import apiClient from 'api/index'
import { ResponseType } from 'api/index'
import { useMutation, useQuery } from 'react-query'

export type ErrorInfo = {
  help: string
  originalString: string
  correctWord: string
}

type WritingResponse = {
  script: string
  errorInfoList: ErrorInfo[]
}

const sendScript = async (body: {
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

export const useWritingScoreQuery = ({
  script,
  onSuccess,
  onError,
}: {
  script: string
  onSuccess: (data: WritingResponse) => void
  onError: (error: Error) => void
}) => {
  return useQuery(['writing', script], () => sendScript({ script }), {
    onSuccess,
    onError,
    retry: false,
    enabled: !!script,
  })
}
