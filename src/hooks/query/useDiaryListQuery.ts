import { useQuery } from 'react-query'
import apiClient from 'api/index'

export type DiaryType = {
  id: string
  name: string
  companyName: string
  logoImageUrl: string
}

const fetchBrandList = async (): Promise<DiaryType[]> => {
  try {
    const { data } = await apiClient.get('/diary')
    return data
  } catch (error) {
    return Promise.reject()
  }
}

const onError = () => {
  console.log('brand error')
}

export const useBrandsQuery = ({
  onSuccess = () => {},
}: {
  onSuccess?: (brands: DiaryType[]) => void
}) => {
  return useQuery('brands', fetchBrandList, {
    onError,
    onSuccess,
  })
}
