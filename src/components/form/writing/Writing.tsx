import Textarea from 'components/common/textarea/Textarea'
import { useState } from 'react'

const Writing = () => {
  const [content, setContent] = useState('')
  return (
    <Textarea
      value={content}
      onChange={(text) => {
        setContent(text)
      }}
    />
  )
}

export default Writing
