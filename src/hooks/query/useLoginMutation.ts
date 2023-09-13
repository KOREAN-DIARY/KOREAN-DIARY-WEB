import apiClient from 'api/index'
import { ResponseType } from 'api/index'
import { useMutation } from 'react-query'

export type LoginResponseType = {
  accessToken: string
  refreshToken: string
}

export type LoginRequestType = {
  credential: string
}

const sendLogin = async (
  body: LoginRequestType
): Promise<LoginResponseType> => {
  try {
    const { data } = await apiClient.post<ResponseType<LoginResponseType>>(
      '/login',
      body
    )
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

export const useLoginMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: LoginResponseType) => void
  onError: (error: Error) => void
}) => {
  return useMutation('Login', sendLogin, {
    retry: 5,
    onSuccess,
    onError,
  })
}
