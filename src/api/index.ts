import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios'
import camelcaseKeys from 'camelcase-keys'
import Cookies from 'js-cookie'
import queryString from 'query-string'
import cookieName from 'constants/cookie'

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

export const logout = () => {
  Cookies.remove(cookieName.accessToken)
  Cookies.remove(cookieName.refreshToken)
  window.location.assign('/login')
}

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Accept: 'application/json' },
})
export const audioClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'multipart/form-data' },
  withCredentials: true,
})

const setRequestConfig = (requestConfig: InternalAxiosRequestConfig) => {
  const accessToken = Cookies.get(cookieName.accessToken)
  if (accessToken) {
    requestConfig.headers.Authorization = `Bearer ${accessToken}`
  }

  return requestConfig
}

const getCamelCaseResponse = (responseConfig: AxiosResponse) => {
  const { data, ...rest } = responseConfig
  return { data: camelcaseKeys(data, { deep: true }), ...rest }
}

const handleError = async (error: AxiosError) => {
  if (
    error.response?.status === HttpStatusCode.Unauthorized &&
    error.config?.url !== '/token'
  ) {
    try {
      const refreshToken = Cookies.get(cookieName.refreshToken)
      const { data } = await apiClient.post<{ accessToken: string }>(
        '/token/refresh',
        { refreshToken }
      )
      Cookies.set(cookieName.accessToken, data.accessToken)
      return error.config
    } catch (error) {
      logout()
      return Promise.reject(error)
    }
  }
  return Promise.reject(error)
}

apiClient.interceptors.response.use(getCamelCaseResponse, handleError)
apiClient.interceptors.request.use(setRequestConfig)
apiClient.defaults.paramsSerializer = (params) => {
  return queryString.stringify(params)
}

audioClient.interceptors.response.use(getCamelCaseResponse)

export default apiClient
