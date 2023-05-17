import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 0.75rem;
  background-color: var(--light-grey);
  border-radius: 1.5rem;
  width: 100%;
  height: 12.5rem;
  padding: 1.25rem;
`

export const DiaryText = styled.p`
  width: 100%;
  text-align: left;
  color: var(--dark-grey);
  font-size: 0.875rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 1rem);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const DiaryButton = styled.button`
  margin-top: 0.2rem;
  width: 14rem;
  height: 3.8rem;
  border-radius: 1rem;
  background-color: var(--white);
  color: var(--dark-grey);
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`
