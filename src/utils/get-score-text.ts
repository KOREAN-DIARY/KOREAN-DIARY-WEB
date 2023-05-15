export const getScoreText = (score: number) => {
  if (score <= 30) {
    return '좋은 시도예요!'
  }
  if (score <= 50) {
    return '다음엔 더 노력해봐요!'
  }
  if (score <= 70) {
    return '잘하고 있어요!'
  }
  if (score <= 90) {
    return '잘했어요!'
  }
  if (score <= 100) {
    return '대단해요!'
  }
}
