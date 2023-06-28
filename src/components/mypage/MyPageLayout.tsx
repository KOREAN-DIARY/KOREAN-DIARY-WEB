import * as S from './MyPageLayout.style'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'

const responseMessage = (response: CredentialResponse) => {
  const decodedToken = response.credential && jwtDecode(response?.credential)
  console.log(decodedToken)
}
const errorMessage = () => {
  console.log('error')
}

const MyPageLayout = () => {
  return (
    <S.Container>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </S.Container>
  )
}

export default MyPageLayout
