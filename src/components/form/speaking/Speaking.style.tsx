import styled from '@emotion/styled'

export const Container = styled.div`
  flex: 1;
`

export const Diary = styled.p`
  padding: 1rem;
  line-height: 1.25rem;
  font-weight: bold;
  color: var(--dark-grey);
  font-size: 0.875rem;
`

export const Wrong = styled.span`
  color: var(--red);
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid var(--grey);
`

export const Sentence = styled.div`
  font-size: 14px;
  color: var(--dark-grey);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SentenceGroup = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SentenceTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const SentenceBottom = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  gap: 0.5rem;
`
