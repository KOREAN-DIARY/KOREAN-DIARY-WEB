import * as S from './MypageLayout.style'
import { getScoreColor } from 'utils/get-score-color'
import { getScoreText } from 'utils/get-score-text'
import BaseLayout from 'components/common/base-layout/BaseLayout'

const MyPageLayout = () => {
  return (
    <S.Container>
      <BaseLayout>
        <S.Top>
          <S.MyInfo>
            <S.Banner>내 정보</S.Banner>
          </S.MyInfo>
          <S.MyScore>나의 점수</S.MyScore>
        </S.Top>
      </BaseLayout>
      <S.Line></S.Line>
      <S.Tab>
        <S.Title>
          <button>공지사항</button>
        </S.Title>
        <S.Title>
          <button>고객센터</button>
        </S.Title>
        <S.Title>
          <button>개발자 정보</button>
        </S.Title>
        <S.Title>로그아웃</S.Title>
      </S.Tab>
    </S.Container>
  )
}

export default MyPageLayout
