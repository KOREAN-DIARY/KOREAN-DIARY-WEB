import * as S from './MypageLayout.style'
import { getScoreColor } from 'utils/get-score-color'
import { getScoreText } from 'utils/get-score-text'
import BaseLayout from 'components/common/base-layout/BaseLayout'
import Graph from 'components/graph/Graph'
import ChartProvider from 'hooks/context/useChartContext'
import { useChartQuery } from 'hooks/query/useChartQuery'
import { useUserDetailQuery } from 'hooks/query/useUserDetailQuery'
import ProfileImg from 'components/common/profile-img/ProfileImg'

const MyPageLayout = () => {
  const { data, isSuccess } = useUserDetailQuery({
    onSuccess: () => {
      return data
    },
  })

  return (
    <BaseLayout>
      <S.Container>
        <S.Top>
          <S.MyInfo>
            <S.Banner>내 정보</S.Banner>
            <S.MyInfo1>
              <ProfileImg width={74} height={74} />
              <S.MyInfo2>
                <S.Name>
                  {data?.name === undefined ? '홍길동' : data.name}
                </S.Name>
                <S.MyInfo3>
                  <img
                    src={require('assets/images/Google-icon.png')}
                    width={15}
                    height={14}
                  />
                  <S.ID>
                    {data?.email === undefined ? 'user@gmail.com' : data.email}
                  </S.ID>
                </S.MyInfo3>
              </S.MyInfo2>
            </S.MyInfo1>
          </S.MyInfo>
          <S.Score>
            <S.Banner>나의 점수</S.Banner>
            <ChartProvider>
              <Graph />
            </ChartProvider>
          </S.Score>
        </S.Top>
        <S.Line></S.Line>
        <S.Tab>
          <S.Title>공지사항</S.Title>
          <S.Title>고객센터</S.Title>
          <S.Title>개발자 정보</S.Title>
          <S.Context>로그아웃</S.Context>
        </S.Tab>
      </S.Container>
    </BaseLayout>
  )
}

export default MyPageLayout
