import styled from 'styled-components';
import NavBar from '../../../common/components/NavBar';
import TrafficGraph from '../../../common/components/TrafficGraph';
import AnomalyRateGraph from '../../../common/components/AnomalyRateGraph';
import { getTrafficsQuery } from '../../../common/api/queries';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function HomePage() {
  const [ datas, setDatas ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const token = "Bearer " + localStorage.getItem("token");
      const res = await getTrafficsQuery(token);
      setDatas(res);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if(isLoading) {
    return (
      <LoadingZone>
        <CircularProgress />;
      </LoadingZone>
    )
  }

  return (
    <>
      <NavBar pageName="HOME PAGE" />
      <Container>
        <Content>
          <LineGraph>
            <TrafficGraph datas={datas} />
          </LineGraph>
          <RingGraph>
            <AnomalyRateGraph datas={datas} />
          </RingGraph>
        </Content>
      </Container>
    </>
  )
}

const LoadingZone = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LineGraph = styled.div`
  width: 120vw;
`;

const RingGraph = styled.div`
`;

const Content = styled.div`
  display: flex;
`;

const Container = styled.div`
  margin-left: var(--sidebar-width);
  padding: var(--container-padding);
`;

export default HomePage;