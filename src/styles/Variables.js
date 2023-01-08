import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background-color: #E2EAFC; // real
    /* --background-color: #0C090A; // test */
    --sidebar-color: #101935;
    --black: #000000;
    --white: #FFFFFF;
    --form-grey: #B6B6B6;
    --input-border-hover: #6BFFB8;
    --font-family: "Rubik";

    --sidebar-width: 13vw;
    --container-padding: 2vw;
    --card-margin: 1vw 3vw;
    --card-padding: 1vw;
    --card-header-margin: 0vw 1vw;
    --card-box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

// --primary-color: #D62E2E; // Brand Blue
// --button-color: #D62E2E; // Button color
// --hover-disabled: #DE5858; // hover or disabled
// --hover: #a11f1f;
// --black: #000000; // Everything which is black
// --pale-black: #777777; // Everything which is black
// --error: #FE0044; // Error red
// --cookie: #f4ca35;
// --blood: #f43563;
// /* PingPong Colors */
// --white: #ffffff;
// --pale-green: #AADA76; // Risk target
// --dark-green: #349933;
// --yellow: #FFFF01;
// --orange: #FD7610;
// --red: ##D62E2E;
// --black: #000000;
// --brand-font: "Poppins", sans-serif;