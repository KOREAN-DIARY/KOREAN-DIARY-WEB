import { useQuery } from 'react-query'
import apiClient from 'api/index'
import { ResponseType } from 'api/index'

type DataType = {
  x: string
  y: number
}

export type ChartType = {
  id: string
  color: string
  data: DataType[]
}

const fetchChart = async (): Promise<ResponseType<ChartType[]>> => {
  try {
    const { data } = await apiClient.get('/chart')
    return data.data
  } catch (error) {
    return Promise.reject()
  }
}

const onError = () => {
  console.error('get user chart error')
}

export const useChartQuery = ({
  onSuccess = () => {},
}: {
  onSuccess?: (chart: ChartType[]) => void
}) => {
  return useQuery('chart', fetchChart, {
    onError,
    onSuccess,
  })
}
