import BaseLayout from 'components/common/base-layout/BaseLayout'
import FormLayout from 'components/form/form-layout/FormLayout'
import DiaryProvider from 'hooks/context/useDiaryContext'

const Form = () => {
  return (
    <BaseLayout>
      <DiaryProvider>
        <FormLayout />
      </DiaryProvider>
    </BaseLayout>
  )
}

export default Form
