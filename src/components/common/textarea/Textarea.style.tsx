import styled from '@emotion/styled'

export const Textarea = styled.textarea`
  display: flex;
  flex: 1;
  width: 100%;
  font-size: 0.875rem;
  text-align: left;
  color: var(--dark-grey);
  font-weight: bold;
  border: none;
  white-space: normal;
  line-height: 150%;
  resize: none;
  padding: 1rem;
  outline: none;
  &::placeholder {
    color: var(--grey);
  }
`
