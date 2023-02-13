import styled from 'styled-components';
import NavBar from '../../../common/components/NavBar';
import Graph from '../../../common/components/Graph';

function HomePage() {
  return (
    <>
      <NavBar pageName="HOME PAGE" />
      <Container>
        <Content>
          <Graph title="Traffic" />
          <Graph title="Anomaly Rate"/>
        </Content>
      </Container>
    </>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Container = styled.div`
  margin-left: var(--sidebar-width);
  padding: var(--container-padding);
`;

export default HomePage;