import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.colors.theme.bg};
}

:root {
    --max-width: 600px;
}

@keyframes spin {
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
}

#root {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media only screen and (max-width: 500px) {
  #root {
    justify-content: unset;
    padding-top: 30px;
  }
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font: inherit;
    font-family: 'Josefin Sans';
}

 p::selection, input::selection {
  background-color: transparent;
}

/* width */
::-webkit-scrollbar {
  background: transparent;
  width: 5px;
  overflow: hidden;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  overflow: hidden;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.theme.element};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

`

export default GlobalStyles;