import PropTypes from 'prop-types'

import { Container } from './styles'

function SVGIcon({ icon, size = '24px', fill = 'currentColor' }) {
  return <Container src={icon} fill={fill} size={size} />
}

SVGIcon.propTypes = {
  icon: PropTypes.elementType,
  size: PropTypes.string,
  fill: PropTypes.string
}

export default SVGIcon
