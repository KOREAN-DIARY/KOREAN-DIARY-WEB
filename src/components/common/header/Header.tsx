import * as S from './Header.style'

const Header = () => {
  return (
    <S.Header>
      <img src={require('assets/logo.png')} width={60} height={60} />
    </S.Header>
  )
}

export default Header
