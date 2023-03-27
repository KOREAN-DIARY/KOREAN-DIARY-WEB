import axios from 'axios'

const checkSpelling = async (text: string) => {
  const result = axios.get('/spell')
  console.log(result)
}

const DiaryForm = () => {
  checkSpelling('심여를 기울여개발한 맛춤법 검사기에요.')

  return <div>form입니당</div>
}

export default DiaryForm
