import styled from 'styled-components';
import SideBar from '../../../common/components/SideBar';
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
  margin: 25px;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Container = styled.div`
  margin-left: var(--sidebar-width);
`;

export default HomePage;