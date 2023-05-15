import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'
import queryString from 'query-string'

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
  baseURL: `http://localhost:8080`,
  headers: { Accept: 'application/json' },
  withCredentials: true,
})
export const voiceClient = axios.create({
  baseURL: `http://localhost:8080`,
  headers: { 'Content-Type': 'multipart/form-data' },
  withCredentials: true,
})

const getCamelCaseResponse = (responseConfig: AxiosResponse) => {
  const { data, ...rest } = responseConfig
  return { data: camelcaseKeys(data, { deep: true }), ...rest }
}
const getSnakeCaseRequest = (requestConfig: AxiosRequestConfig) => {
  if (requestConfig.data) {
    const { data, ...rest } = requestConfig
    return { data: snakecaseKeys(data, { deep: true }), ...rest }
  }
  return requestConfig
}

// const setRequestConfig = (requestConfig: AxiosRequestConfig) => {
//   const accessToken = Cookies.get(cookieName.accessToken)
//   const snakeCaseConfig = getSnakeCaseRequest(requestConfig)
//   if (accessToken) {
//     snakeCaseConfig.headers = {
//       ...snakeCaseConfig.headers,
//       Authorization: `Bearer ${accessToken}`,
//     }
//   }
//   return snakeCaseConfig
// }

// const setImgRequestConfig = (requestConfig: AxiosRequestConfig) => {
//   const accessToken = Cookies.get(cookieName.accessToken)
//   if (accessToken) {
//     requestConfig.headers = {
//       Authorization: `Bearer ${accessToken}`,
//     }
//   }
//   return requestConfig
// }

// const handleError = async (error: AxiosError) => {
//   if (
//     error.response?.status === HttpStatusCode.Unauthorized &&
//     error.config.url !== '/token'
//   ) {
//     try {
//       const refreshToken = Cookies.get(cookieName.refreshToken)
//       const { data } = await apiClient.post<{ accessToken: string }>(
//         '/token/refresh',
//         { refreshToken }
//       )
//       Cookies.set(cookieName.accessToken, data.accessToken)
//       return error.config
//     } catch (error) {
//       logout()
//       return Promise.reject(error)
//     }
//   }
//   return Promise.reject(error)
// }

apiClient.interceptors.response.use(getCamelCaseResponse)
apiClient.defaults.paramsSerializer = (params) => {
  return queryString.stringify(params)
}

voiceClient.interceptors.response.use(getCamelCaseResponse)
// imgClient.interceptors.request.use(setImgRequestConfig)

export default apiClient
