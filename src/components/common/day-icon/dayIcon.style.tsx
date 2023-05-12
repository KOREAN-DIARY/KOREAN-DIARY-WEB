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

  .mon {
    background: var(--red);
  }

  .tue {
    background: var(--orange);
  }

  .wed {
    background: var(--yellow);
  }

  .thu {
    background: var(--green);
  }

  .fri {
    background: var(--sky-blue);
  }

  .sat {
    background: var(--blue);
  }

  .sun {
    background: var(--purple);
  }
`
