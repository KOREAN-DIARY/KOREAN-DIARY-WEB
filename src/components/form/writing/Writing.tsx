import Textarea from 'components/common/textarea/Textarea'
import { useDiaryContext } from 'hooks/context/useDiaryContext'

const Writing = () => {
  const { diary, setDiary } = useDiaryContext()
  return (
    <Textarea
      value={diary.originalContent}
      onChange={(text) => {
        setDiary({ ...diary, originalContent: text })
      }}
    />
  )
}

export default Writing
