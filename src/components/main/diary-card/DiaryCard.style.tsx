import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: var(--light-grey);
  border-radius: 1.5rem;
  width: 100%;
  height: 12.5rem;
  padding: 1rem;
`

export const DiaryText = styled.p`
  color: var(--dark-grey);
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 1rem);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
