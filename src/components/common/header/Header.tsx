import { useNavigate } from 'react-router-dom'
import * as S from './Header.style'

const Header = () => {
  const navigate = useNavigate()
  return (
    <S.Header>
      <button onClick={() => navigate('/')}>
        <img src={require('assets/images/logo.png')} width={45} height={45} />
      </button>
    </S.Header>
  )
}

export default Header
