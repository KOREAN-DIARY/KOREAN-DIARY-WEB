import * as S from './MypageLayout.style'
import { getScoreColor } from 'utils/get-score-color'
import { getScoreText } from 'utils/get-score-text'

const MyPageLayout = () => {
  return (
    <S.Container>
      <S.MyInfo>
        <S.Title>내 정보</S.Title>
      </S.MyInfo>
      <S.MyScore>
        <S.Title>나의 점수</S.Title>
      </S.MyScore>
      <S.Tab>
        <S.Line></S.Line>
        <S.Title>
          <button>공지사항</button>
        </S.Title>
        <S.Title>
          <button>고객센터</button>
        </S.Title>
        <S.Title>
          <button>개발자 정보</button>
        </S.Title>
        <S.Context>
          <button>로그아웃</button>
        </S.Context>
      </S.Tab>
    </S.Container>
  )
}

export default MyPageLayout
