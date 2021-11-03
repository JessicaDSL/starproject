import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: #101010;
  }
`;
 
export default GlobalStyle;