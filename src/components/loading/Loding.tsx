import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
  return (
    <ThreeDots
      height="50"
      width="50"
      radius="9"
      color="grey"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  )
}

export default Loading
