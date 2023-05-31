import Textarea from 'components/common/textarea/Textarea'
import { useDiaryContext } from 'hooks/context/useDiaryContext'

const Writing = () => {
  const { diary, setDiary } = useDiaryContext()
  return (
    <Textarea
      value={diary.content}
      onChange={(text) => {
        setDiary({ ...diary, content: text })
      }}
    />
  )
}

export default Writing
