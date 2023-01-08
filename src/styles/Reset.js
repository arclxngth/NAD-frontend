import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    color: var(--white);
    background-color: var(--background-color);
    margin: 0;
    padding: 0;

    font-family: var(--font-family);
  }
`;