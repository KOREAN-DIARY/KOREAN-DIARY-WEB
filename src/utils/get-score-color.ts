export const getScoreColor = (score: number) => {
  if (score <= 30) {
    return 'red'
  }
  if (score <= 50) {
    return 'orange'
  }
  if (score <= 70) {
    return 'yellow'
  }
  if (score <= 80) {
    return 'green'
  }
  if (score <= 100) {
    return 'sky-blue'
  }
  return 'grey'
}
