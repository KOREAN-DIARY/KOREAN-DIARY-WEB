import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: var(--light-grey);
  border-radius: 1.5rem;
  width: 20rem;
  height: 13rem;
  padding: 1rem;
`

export const DateContainer = styled.div`
  width: calc(100% - 1rem);
  display: flex;
  margin-bottom: 1.5rem;
  align-items: center;
`
export const DateText = styled.p`
  color: var(--dark-grey);
  margin-left: 1rem;
  font-size: 1rem;
`

export const DiaryText = styled.p`
  color: var(--dark-grey);
  font-size: 0.8rem;
  line-height: 1rem;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 1rem);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
