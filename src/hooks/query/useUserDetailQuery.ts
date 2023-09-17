import { useQuery } from 'react-query'
import apiClient from 'api/index'
import format from 'date-fns/format'

type UserType = {
  id: string
  email: string
  name: string
  picture: string
}

const fetchUserDetail = async (): Promise<UserType> => {
  try {
    const { data } = await apiClient.get('/user')
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

const onError = () => {
  console.log('get user detail error')
}

export const useUserDetailQuery = ({
  onSuccess = () => {},
}: {
  onSuccess?: (user: UserType) => void
}) => {
  return useQuery('user', fetchUserDetail, {
    onError,
    onSuccess,
    retry: 5,
  })
}
