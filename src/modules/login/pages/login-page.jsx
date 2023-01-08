import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputForm from "../../../common/components/FormInput"
import PasswordFormInput from '../../../common/components/PasswordFormInput';


function LoginPage() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function handleSignIn() {
    // if login success
    navigate(`/home`)
  }

  return (
    <>
      <Container>
        <ImageContent>
          <img src="/icons/NAD-logo.png" alt="" />
        </ImageContent>
        <Content>
          <InputForm
            callback={setUsername}
            label="username"
            type="string"
            placeholder="username"
          />
          <PasswordFormInput
            callback={setPassword}
            label="password"
            type="string"
            placeholder="password"
          />
          <Button onClick={() => handleSignIn()}>Sign In</Button>
        </Content>
      </Container>
    </>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 100vh;
`;


const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #6BFFB8;
  color: var(--black);

  width: 15vw;
  padding: 1vw;
  border-radius: 10px;
  border: none;

  font-size: medium;

  transition: .3s;
  
  :hover {
    cursor: pointer;
    background-color: #2CEAA3;
  }
`;

export default LoginPage;