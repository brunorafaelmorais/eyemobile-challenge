import PropTypes from 'prop-types'

import { Container } from './styles'

function Alert({ text }) {
  return <Container>{text}</Container>
}

Alert.propTypes = {
  text: PropTypes.string
}

export default Alert
