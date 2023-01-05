import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/Rubik/Rubik-Light.ttf") format("truetype");
  }

  @font-face {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Rubik/Rubik-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Rubik/Rubik-Medium.ttf") format("truetype");
  }
  
  @font-face {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/Rubik/Rubik-SemiBold.ttf") format("truetype");
  }
`;