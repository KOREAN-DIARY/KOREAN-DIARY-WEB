import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import apiClient from 'api/index'

interface TokenResponse {
  accessToken: string
  refreshToken: string
}

const [accessToken, setAccessToken] = useState<string | null>(null)
const [refreshToken, setRefreshToken] = useState<string | null>(null)

/* session storage에 저장 */

useEffect(() => {
  const storedAccessToken = sessionStorage.getItem('accessToken')
  const storedRefreshToken = sessionStorage.getItem('refreshToken')
  setAccessToken(storedAccessToken)
  setRefreshToken(storedRefreshToken)

  if (storedAccessToken) {
    apiClient.defaults.headers['Authorization'] = `Bearer ${storedAccessToken}`
  }
}, [])

// const api = axios.create({
//   baseURL: '/',
// })

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      originalRequest._retry = true

      try {
        const response = await apiClient.post<TokenResponse>(
          '/refreshToken', // token refresh api
          { refreshToken }
        )
        const newAccessToken = response.data.accessToken
        setAccessToken(newAccessToken)
        sessionStorage.setItem('accessToken', newAccessToken)

        apiClient.defaults.headers['Autorization'] = `Bearer ${newAccessToken}`

        return apiClient(originalRequest)
      } catch (error) {
        console.error('Refresh token error: ', error)
      }
    }
    return Promise.reject(error)
  }
)
