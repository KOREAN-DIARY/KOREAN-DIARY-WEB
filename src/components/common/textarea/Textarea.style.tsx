import styled from '@emotion/styled'

export const Container = styled.textarea`
  width: 100%;
  font-size: 14px;
  text-align: left;
  color: #666666;
  font-weight: bold;
  border: none;
  white-space: normal;
  resize: none;
  padding: 1rem;
  outline: none;
  box-sizing: border-box;
  &::placeholder {
    color: var(--grey);
  }
`
