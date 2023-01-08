import styled from "styled-components";
import DividerLine from "./DividerLine";

import traffic from "../dummies/traffic.json"

function TrafficDisplay({ title }) {

  return (
    <>
      <Container>
        <h1>{ title }</h1>
        <DividerLine thic="10px" />
        <Table>
          <TableHeader>
            <h3>IP ADDRESS</h3>
            <h3>STATUS</h3>
            <h3>TIMESTAMP</h3>
          </TableHeader>
          <TableBody>
            {traffic.map((record) => {
              return (
                <>
                  <h3>{record.ip}</h3>
                  <h3>{record.status}</h3>
                  <h3>{record.date}</h3>
                </>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}

const TableBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  background-color: #C5C5C5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  height: 50vh;

  color: black;

  overflow-y: scroll;

  h3 {
    text-align: center;
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  background-color: #C5C5C5;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin-bottom: 10px;

  h3 {
    color: black;
    text-align: center;
  }
`;

const Table = styled.div`
  margin: 30px;
`;

const Container = styled.div`
  background-color: var(--white);
  margin: 1vw 5vw;
  padding: 1vw;

  h1 {
    margin: 20px;

    color: black;
    font-weight: bold;
  }
`;

export default TrafficDisplay;