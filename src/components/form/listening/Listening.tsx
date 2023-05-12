import AudioPlayer from '../audio-player/AudioPlayer'
import * as S from './Listening.style'

const Listening = () => {
  const text = '테스트 문장입니다.'
  return (
    <S.ListeningWrapper>
      <p>{text}</p>
      <S.HorizontalLine />
      <AudioPlayer text={text} />
    </S.ListeningWrapper>
  )
}

export default Listening
