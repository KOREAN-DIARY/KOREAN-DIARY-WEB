import cookieName from 'constants/cookie'
import * as S from './LoginLayout.style'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useLoginMutation } from 'hooks/query/useLoginMutation'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const LoginLayout = () => {
  const navigate = useNavigate()
  const { mutateAsync } = useLoginMutation({
    onSuccess: () => {},
    onError: () => {},
  })
  const responseMessage = async (response: CredentialResponse) => {
    const payload = { credential: response.credential || '' }
    const { accessToken, refreshToken } = await mutateAsync(payload)
    Cookies.set(cookieName.accessToken, accessToken)
    Cookies.set(cookieName.refreshToken, refreshToken)
    navigate('/')
  }
  const errorMessage = () => {
    console.log('error')
  }

  return (
    <S.Container>
      <S.Image src={require('assets/images/login.png')} />
      <GoogleLogin
        shape="circle"
        width="3rem"
        text="signin_with"
        onSuccess={responseMessage}
        onError={errorMessage}
      />
      <S.ImageGroup src={require('assets/images/login-images.png')} />
    </S.Container>
  )
}

export default LoginLayout
