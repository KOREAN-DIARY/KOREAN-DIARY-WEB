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
      <S.Image src={require('assets/images/mypage.png')} />
      <GoogleLogin
        shape="circle"
        width="3rem"
        text="signin_with"
        onSuccess={responseMessage}
        onError={errorMessage}
      />
      <S.ImageGroup src={require('assets/images/mypage-images.png')} />
    </S.Container>
  )
}

export default MyPageLayout
