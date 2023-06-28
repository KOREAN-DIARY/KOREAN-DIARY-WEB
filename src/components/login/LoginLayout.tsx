import * as S from './LoginLayout.style'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'

const responseMessage = (response: CredentialResponse) => {
  const decodedToken = response.credential && jwtDecode(response?.credential)
  console.log(decodedToken)
}
const errorMessage = () => {
  console.log('error')
}

const LoginLayout = () => {
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
