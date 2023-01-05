import styled from "styled-components";

export const Button = styled.button`
  background-color: #6BFFB8;
  color: var(--black);

  width: 100%;
  padding: 15px;
  border-radius: 5px;
  border: none;

  font-family: var(--font-family);
  font-size: medium;
  text-align: center;

  transition: .3s;
  
  :hover {
      cursor: pointer;
      background-color: #2CEAA3;
  }
`;