import styled from '@emotion/styled'

export const GrammerWrapper = styled.article`
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
  color: var(--dark-grey);
  background-color: var(--dark-grey);
  height: 0.1rem;
  border-color: var(--dark-grey);
  margin: 1rem 0.75rem;
`

export const Text = styled.p`
  padding: 1rem;
`

export const ResultContainer = styled.div`
  position: relative;
  width: 100%;
  height: 14rem;
`

export const ResultGroups = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
