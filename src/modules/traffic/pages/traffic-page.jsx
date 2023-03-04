import styled from "styled-components";
import { useEffect, useState } from 'react';

import NavBar from "../../../common/components/NavBar";
import TrafficDisplay from "../../../common/components/TrafficDisplay"
import AnomalyDisplay from "../../../common/components/AnomalyDisplay"
import { getTrafficsQuery } from '../../../common/api/queries';

function TrafficPage() {
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
      <NavBar pageName="TRAFFIC PAGE"/>
      <Container>
        <TrafficDisplay datas={datas} />
        <AnomalyDisplay datas={datas} />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-left: var(--sidebar-width);
  padding: var(--container-padding);
`;

export default TrafficPage;