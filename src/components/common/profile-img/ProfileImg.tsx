import { useNavigate } from 'react-router-dom'
import * as S from './ProfileImg.style'
import { useUserDetailQuery } from 'hooks/query/useUserDetailQuery'

interface ProfileImgProps {
  width: number
  height: number
}

const ProfileImg = ({ width, height }: ProfileImgProps) => {
  const { data, isSuccess } = useUserDetailQuery({
    onSuccess: () => {
      return data
    },
  })

  return (
    <S.ProfileImg
      src={
        data?.picture === undefined
          ? require('assets/images/profile.png')
          : data.picture
      }
      width={width}
      height={height}
      referrerPolicy="no-referrer"
    />
  )
}

export default ProfileImg
