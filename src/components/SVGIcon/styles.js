import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

export const Container = styled(ReactSVG)`
  fill: ${props => props.fill};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: inline-flex;

  > div,
  > div > svg {
    width: 100%;
    height: 100%;
  }

  > div > svg {
    display: block;
  }
`
