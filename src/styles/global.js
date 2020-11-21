import { createGlobalStyle } from 'styled-components'

import dinWoff2 from '../assets/fonts/DINCondensed-Bold.woff2'
import dinWoff from '../assets/fonts/DINCondensed-Bold.woff'

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'DIN Condensed';
    src: url(${dinWoff2}) format('woff2'), url(${dinWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
  }
`
