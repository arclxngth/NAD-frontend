import styled from 'styled-components';
import NavBar from '../../../common/components/NavBar';
import TrafficGraph from '../../../common/components/TrafficGraph';
import AnomalyRateGraph from '../../../common/components/AnomalyRateGraph';
import { getTrafficsQuery } from '../../../common/api/queries';
import { useEffect, useState } from 'react';

function HomePage() {
  const [ datas, setDatas ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await getTrafficsQuery();
      setDatas(res);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if(isLoading) {
    return null;
  }

  return (
    <>
      <NavBar pageName="HOME PAGE" />
      <Container>
        <Content>
          <TrafficGraph datas />
          <AnomalyRateGraph title="Anomaly Rate"/>
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