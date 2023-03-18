import styled from 'styled-components';
import DividerLine from './DividerLine';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

function TrafficGraph({ datas }) {
  const options = { day: '2-digit', month:'2-digit', year:'numeric', timeZone: "Asia/Bangkok" };
  const countByDate = datas.reduce((count, e) => {
    const date = new Date(e.createdAt).toLocaleString("en-GB", options);
    if (!count[date]) {
      count[date] = {};
    }

    const value = e.status;
    if (!count[date][value]) {
      count[date][value] = 0;
    }
    count[date][value]++;
    return count;
  }, {});

  const labels = Object.keys(countByDate);
  const displayDatas = Object.values(countByDate).map(e => e.anomaly)

  const data = {
    labels,
    datasets: [
      {
        data: displayDatas,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <>
      <Container>
        <h1>{ "Traffic" }</h1>
        <DividerLine color="var(--background-color)" thic="10px" />
        <Line data={ data }/>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 65vh;

  background-color: var(--white);
  margin: var(--card-margin);
  padding: var(--card-padding);
  
  box-shadow: var(--card-box-shadow);

  h1 {
    margin: var(--card-header-margin);

    font-family: var(--font-family);
    color: black;
    font-weight: bold;
  }
`;

export default TrafficGraph;