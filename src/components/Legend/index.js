import PropTypes from 'prop-types'

import { Container } from './styles'

function Legend({ color, primaryText, secondaryText }) {
  return (
    <Container color={color}>
      <div />
      <span className="primaryText">{primaryText}</span>
      <span className="secondaryText">{secondaryText}</span>
    </Container>
  )
}

Legend.propTypes = {
  color: PropTypes.string,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string
}

export default Legend
