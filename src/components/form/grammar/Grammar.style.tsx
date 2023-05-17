import styled from '@emotion/styled'

export const GrammarWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  color: var(--dark-grey);
  text-align: justify;
  width: 100%;
  font-size: 0.875rem;
  margin-top: 1rem;
  font-weight: bold;
`

export const Diary = styled.p`
  padding: 1rem;
  line-height: 1.25rem;
`

export const Wrong = styled.span`
  color: var(--red);
`

export const HorizontalLine = styled.hr`
  background-color: var(--grey);
  height: 1px;
  border-color: var(--dark-grey);
  margin: 1rem 0.75rem;
`

export const Text = styled.p`
  padding: 1rem;
`

export const ResultContainer = styled.div`
  position: relative;
  width: 100%;
`

export const ResultGroups = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
