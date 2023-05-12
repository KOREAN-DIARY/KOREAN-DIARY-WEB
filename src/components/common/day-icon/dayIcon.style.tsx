import styled from '@emotion/styled'

export const DayIcon = styled.div`
  div {
    position: relative;
    vertical-align: middle;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: white;
    font-weight: bold;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.1rem;
  }

  .red {
    background: var(--red);
  }

  .orange {
    background: var(--orange);
  }

  .yellow {
    background: var(--yellow);
  }

  .green {
    background: var(--green);
  }

  .skyblue {
    background: var(--sky-blue);
  }

  .blue {
    background: var(--blue);
  }

  .purple {
    background: var(--purple);
  }
`
