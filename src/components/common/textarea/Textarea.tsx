import * as S from './Textarea.style'

interface TextareaProps {
  value: string
  onChange: (value: string) => void
}

const Textarea = ({ value, onChange }: TextareaProps) => {
  return (
    <S.Container
      placeholder="일기를 입력해주세요."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      cols={50}
    ></S.Container>
  )
}

export default Textarea
