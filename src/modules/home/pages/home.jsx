import styled from 'styled-components';
import SideBar from '../../../common/components/SideBar';
import NavBar from '../../../common/components/NavBar';

function HomePage() {
  return (
    <>
      <Container>
        {/* <SideBar /> */}
        <NavBar />
      </Container>
    </>
  )
}

const Container = styled.div`
`;

export default HomePage;