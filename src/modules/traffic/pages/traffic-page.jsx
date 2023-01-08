import styled from "styled-components";
import NavBar from "../../../common/components/NavBar";
import TrafficDisplay from "../../../common/components/TrafficDisplay"
import AnomalyDisplay from "../../../common/components/AnomalyDisplay"

function TrafficPage() {
  return (
    <>
      <NavBar pageName="Traffic"/>
      <Container>
        <TrafficDisplay title="Traffic"/>
        <AnomalyDisplay title="Anomaly List"/>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-left: var(--sidebar-width);
`;

export default TrafficPage;