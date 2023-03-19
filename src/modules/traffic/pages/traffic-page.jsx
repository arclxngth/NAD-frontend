import styled from "styled-components";
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import NavBar from "../../../common/components/NavBar";
import TrafficDisplay from "../../../common/components/TrafficDisplay"
import { getTrafficsQuery } from '../../../common/api/queries';

function TrafficPage() {
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
      <NavBar pageName="TRAFFIC PAGE"/>
      <Container>
        <TrafficDisplay datas={datas} />
      </Container>
    </>
  );
}

const LoadingZone = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin-left: var(--sidebar-width);
  padding: var(--container-padding);
`;

export default TrafficPage;