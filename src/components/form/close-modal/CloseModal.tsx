import * as S from './CloseModal.style'

interface CloseModalProps {
  onClose: () => void
  onConfirm: () => void
}

const CloseModal = ({ onClose, onConfirm }: CloseModalProps) => (
  <S.ModalBackdrop>
    <S.ModalContainer>
      <S.Icon className="material-icons">exit_to_app</S.Icon>
      <S.Title>일기 작성을 취소 하시겠습니까?</S.Title>
      <S.Content>지금까지 작성한 일기는 저장되지 않습니다.</S.Content>
      <S.Button>
        <S.NoBtn onClick={() => onClose()}>아니오</S.NoBtn>
        <S.YesBtn onClick={() => onConfirm()}>네</S.YesBtn>
      </S.Button>
    </S.ModalContainer>
  </S.ModalBackdrop>
)

export default CloseModal
