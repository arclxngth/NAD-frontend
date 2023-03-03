import styled from "styled-components";
import { useState } from 'react';

import NavBar from "../../../common/components/NavBar"
import DividerLine from "../../../common/components/DividerLine"
import FormInput from "../../../common/components/FormInput"
import { createTrafficDummies } from "../../../common/api/queries";

function DemoPage() {
  const [ amount, setAmount ] = useState("");

  async function handleSubmit() {
    const res = await createTrafficDummies(amount);
    alert("success");
  }

  return (
    <>
      <NavBar pageName="DEMO PAGE"/>
      <Container>
        <Console>
          <h1>Console</h1>
          <DividerLine thic="10px" color="var(--background-color)" />
          <FormInput 
            label="Number of request"
            callback={setAmount}
            type="number"
          />
          <Button onClick={() => handleSubmit()}>Send Request</Button>
        </Console>
      </Container>
    </>
  );
}

const Button = styled.button`
  padding: 0.5vw;

  border-radius: 10px;
`;

const Container = styled.div`
  margin-left: var(--sidebar-width);
  padding: var(--container-padding);
`;

const Console = styled.div`
  background-color: white;
  box-shadow: var(--card-box-shadow);

  margin: var(--card-margin);
  padding: var(--card-padding);

  h1 {
    margin: var(--card-header-margin);
    color: black;
  }
`;

export default DemoPage;