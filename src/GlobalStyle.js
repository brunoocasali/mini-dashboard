import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }
  * {
    font-family: 'Work Sans';
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url("fonts/Work_Sans/regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
}

`

export default GlobalStyle