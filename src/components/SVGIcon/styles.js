import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

export const Container = styled(ReactSVG)`
  fill: ${props => props.fill};
  width: ${props => props.size};
  height: ${props => props.size};
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
