import { OpenAIApi, Configuration } from 'openai'

const checkSpelling = async (text: string) => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    // prompt: `Correct this to standard Korean and give me the reason:\n\n${text}`,
    prompt: `Correct this to standard Korean and give me the reason:\n\n${text}`,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })
}

const DiaryForm = () => {
  checkSpelling('심여를 기울여개발한 맛춤법 검사기에요.')

  return <div>form입니당</div>
}

export default DiaryForm
