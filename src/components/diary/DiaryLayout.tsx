import * as S from './DiaryLayout.style'
import ScoreGroup from 'components/common/score-group/ScoreGroup'
import DayGroup from 'components/common/day-group/DayGroup'
import Grammar from 'components/form/grammar/Grammar'
import { useDiaryDetailQuery } from 'hooks/query/useDiaryDetailQuery'
import { useParams } from 'react-router-dom'

const DiaryLayout = () => {
  const { id } = useParams()
  if (!id) {
    return <></>
  }
  const { isSuccess, data } = useDiaryDetailQuery(new Date(id))

  return (
    <S.Container>
      <S.DayFrame>
        <DayGroup date={id} />
      </S.DayFrame>
      {isSuccess && (
        <>
          <S.Border>
            <ScoreGroup writing={data.writing} speaking={data.speaking} />
          </S.Border>
          <Grammar defaultDiary={data} />
        </>
      )}
    </S.Container>
  )
}

export default DiaryLayout
