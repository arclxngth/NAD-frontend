import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../common/components/Button';
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
          <Submission>
            <Button onClick={handleSignIn}>Sign In</Button>
          </Submission>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 100vh;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute; */
`;

const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;

  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  height: 100vh;
`;

const Submission = styled.div`
  margin: 10px;
  width: 30%;
`;

export default LoginPage;