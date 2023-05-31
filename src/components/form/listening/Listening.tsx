import AudioPlayer from '../audio-player/AudioPlayer'
import * as S from './Listening.style'

const Listening = () => {
  const text =
    '오늘은 평소와 같이 출근을 했다. 하지만 아침부터 기분이 조금 무거워서 일이 잘 안됐다. 업무를 처리하면서도 마음은 계속 쓰라린 기분이었다. 이유는 명확하지 않았다. 아마도 요즘 조금 지쳐서 그런 것 같다. \
    점심시간에는 동료들과 함께 밖에서 식사를 했다. 날씨가 좋아서 실내보다는 야외에서 식사를 하니 기분도 좋아졌다. 이렇게 살아가면서 가끔은 일상에서 벗어나서 새로운 경험을 하는 것도 좋은 것 같다.\
    오후에는 업무를 마치고 조금 일찍 퇴근을 했다. 집에 돌아와서는 책을 읽으면서 푹 쉬었다. 이렇게 집에서 조용하게 시간을 보내는 것도 좋은 것 같다. 나름의 작은 여유를 즐기면서 내일을 준비해야겠다.\
    오늘은 기분이 조금 무겁기는 했지만, 그래도 삶에서 조금씩 느껴지는 작은 기쁨들을 놓치지 않으며 살아가야겠다는 생각을 했다.'
  return (
    <S.ListeningWrapper>
      <div>{text}</div>
      <S.HorizontalLine />
      <AudioPlayer text={text} />
    </S.ListeningWrapper>
  )
}

export default Listening
