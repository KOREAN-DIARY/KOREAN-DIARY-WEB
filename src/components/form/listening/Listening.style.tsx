import styled from '@emotion/styled'

export const ListeningWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  color: var(--dark-grey);
  text-align: justify;
  font-weight: 500;
  width: 100%;
  font-size: 1rem;
  line-height: 1.2rem;
  margin-top: 1rem;
  & > div {
    font-weight: bold;
    font-size: 0.875rem;
    padding: 1rem;
  }
`

export const HorizontalLine = styled.hr`
  color: var(--dark-grey);
  background-color: var(--grey);
  height: 1px;
  border-color: var(--dark-grey);
  margin: 1rem 0;
`
