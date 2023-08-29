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
            <S.MyInfo1>
              <img
                src={require('assets/images/Ellipse 82.png')}
                width={74}
                height={74}
              />
              <S.MyInfo2>
                <S.Name>홍길동</S.Name>
                <S.MyInfo3>
                  <img
                    src={require('assets/images/Google-icon.png')}
                    width={15}
                    height={14}
                  />
                  <S.ID>userID@gmail.com</S.ID>
                </S.MyInfo3>
              </S.MyInfo2>
            </S.MyInfo1>
          </S.MyInfo>
          <S.MyScore>나의 점수</S.MyScore>
        </S.Top>
      </BaseLayout>
      <S.Line></S.Line>
      <S.Tab>
        <S.Title>공지사항</S.Title>
        <S.Title>고객센터</S.Title>
        <S.Title>개발자 정보</S.Title>
        <S.Context>로그아웃</S.Context>
      </S.Tab>
    </S.Container>
  )
}

export default MyPageLayout
