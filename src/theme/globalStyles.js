import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --theme-background-primary: #FFF;
  }
 

 *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem; 
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--theme-background-primary);
    padding: 0;
    margin:0;
  }

  #root {
    width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    position: relative;
    display: flex;
    flex-direction: column;
  
  }

  .form-group {
      margin-bottom: 2.5rem;
      &:last-child {
        margin-bottom: 0;
      }
  }

  `;

export default GlobalStyles;
