import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'
import camelcaseKeys from 'camelcase-keys'
// TODO: make snake case request
// import snakecaseKeys from 'snakecase-keys'
import queryString from 'query-string'

export interface ResponseType<T> {
  code: number
  message: string
  http_status: number
  data: T
}

export enum HttpStatusCode {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  UnprocessableEntity = 422,
  InternalServerError = 500,
}

const apiClient = axios.create({
  baseURL: `/`,
  headers: { Accept: 'application/json' },
})
export const voiceClient = axios.create({
  baseURL: `/`,
  headers: { 'Content-Type': 'multipart/form-data' },
  withCredentials: true,
})

const getCamelCaseResponse = (responseConfig: AxiosResponse) => {
  const { data, ...rest } = responseConfig
  return { data: camelcaseKeys(data, { deep: true }), ...rest }
}

apiClient.interceptors.response.use(getCamelCaseResponse)
apiClient.defaults.paramsSerializer = (params) => {
  return queryString.stringify(params)
}

voiceClient.interceptors.response.use(getCamelCaseResponse)

export default apiClient
