import { StyledContainer } from './Components/Styled/Container.styled.js';
import { StyledImage } from './Components/Styled/Image.styled.js';

import Header from './Components/Header/Header.js';
import TodoContainer from './Components/TodoContainer/TodoContainer.js';
import Footer from './Components/Footer/Footer.js';

import GlobalStyles from './Components/Styled/GlobalStyles.js';
import { ThemeProvider } from 'styled-components';

import { useSelector } from 'react-redux';

function App() {

  const mode = useSelector(val => val.theme);


  const DarkThemeColors = {
    element: 'hsl(235, 24%, 19%)',
    bg: 'hsl(235, 21%, 11%)',
    brightText: 'hsl(234, 11%, 52%)',
    hover: 'white',
    text: 'hsl(234, 39%, 85%)',
    brightElement: 'hsl(233, 14%, 35%)'
  }

  const LightThemeColors = {
    element: 'hsl(0, 0%, 98%)',
    bg: 'hsl(236, 33%, 92%)',
    brightText: 'hsl(236, 9%, 61%)',
    hover: 'white',
    text: 'hsl(235, 19%, 35%)',
    brightElement: 'hsl(236, 33%, 92%)',
  }

  const DesktopImageSrc = `./images/bg-desktop-${mode == 'dark' ? 'dark' : 'light'}.jpg`;
  const MobileImageSrc = `./images/bg-mobile-${mode == 'dark' ? 'dark' : 'light'}.jpg`;


  return <>
    <ThemeProvider theme={{
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      borderRadius: '7px',
      colors: {
        theme: mode == 'dark' ? DarkThemeColors : LightThemeColors,
        primary: {
          unchecked: 'hsl(220, 98%, 61%)',
          checked: 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
        }
      }
    }}>
      <GlobalStyles />

      <StyledImage className="dekstopImg" src={DesktopImageSrc} alt='Background' />
      <StyledImage className="mobileImg" src={MobileImageSrc} alt='Background' />

      <StyledContainer>

        <Header />
        <TodoContainer />
        <Footer />

      </StyledContainer>

    </ThemeProvider>
  </>
}

export default App;
