import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Anek Latin', sans-serif;

    button{
        cursor: pointer;
    }
  }
  .App{
      width: 100%;
      height: 100%;
  }
`;

export default GlobalStyle;
