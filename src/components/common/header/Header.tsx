import { useNavigate } from 'react-router-dom'
import * as S from './Header.style'
import { useUserDetailQuery } from 'hooks/query/useUserDetailQuery'
import ProfileImg from '../profile-img/ProfileImg'

const Header = () => {
  const navigate = useNavigate()
  return (
    <S.Header>
      <button onClick={() => navigate('/')}>
        <img src={require('assets/images/logo.png')} width={45} height={45} />
      </button>
      <S.Profile>
        <button onClick={() => navigate('/my')}>
          <ProfileImg width={30} height={30} />
        </button>
      </S.Profile>
    </S.Header>
  )
}

export default Header
