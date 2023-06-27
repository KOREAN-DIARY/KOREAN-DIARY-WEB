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
    <div>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  )
}

export default MyPageLayout
