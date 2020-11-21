import { createGlobalStyle } from 'styled-components'

import dinBold from '../assets/fonts/DINCondensed-Bold.ttf'
import avenirBlack from '../assets/fonts/Avenir-Black.ttf'
import avenirMedium from '../assets/fonts/Avenir-Medium.ttf'
import avenirHeavy from '../assets/fonts/Avenir-Heavy.ttf'
import avenirRomam from '../assets/fonts/Avenir-Roman.ttf'

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${avenirRomam}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${avenirMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${avenirBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir Heavy';
    src: url(${avenirHeavy}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'DIN Condensed';
    src: url(${dinBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
  }
`
