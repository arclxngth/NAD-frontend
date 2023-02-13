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

function Graph({ title, }) {
  const labels = [ "1-JAN-2023", "2-JAN-2023", "3-JAN-2023" ]
  const data = {
    labels,
    datasets: [
      {
        data: [1, 100, 200],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <>
      <Container>
        <h1>{ title }</h1>
        <DividerLine color="var(--background-color)" thic="10px" />
        <Line data={ data }/>
      </Container>
    </>
  );
}

const Container = styled.div`
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

export default Graph;