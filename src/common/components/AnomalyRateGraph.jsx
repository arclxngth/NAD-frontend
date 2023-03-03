import styled from "styled-components";
import DividerLine from "./DividerLine";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
);

function AnomalyRateGraph({ datas }) {
  const labels = [ "Normal", "Anomaly" ];
  const displayData = {
    labels,
    datasets: [
      {
        data: [12, 19],
        backgroundColor: [
          '#30FF37',
          '#FF4C4C',
        ],
      },
    ]
  };

  const options = {
    // responsive: true,
    maintainAspectRatio: false
  }

  return (
    <>
      <Container>
        <h1>{ "Anomaly Rate" }</h1>
        <DividerLine color="var(--background-color)" thic="10px" />
        <GraphLegend>
          <div className="normal">
            <div></div>
            <span>Normal</span>
          </div>
          <div className="anomaly">
            <div></div>
            <span>Anomaly</span>
          </div>
        </GraphLegend>
        <div style={{ height: "200px"}}>
          <Doughnut 
            data={ displayData } 
          />
        </div>
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

const GraphLegend = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  color: var(--black);

  margin: 1em 0.5em;
  padding: 0.2em;

  .normal {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 1em;

    div {
      margin-right: 0.5em;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 15px;
      height: 15px; 

      border-radius: 50%;
      background-color: var(--normal-color);
    }
  }

  .anomaly {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 0.3em;

    div {
      margin-right: 0.5em;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 15px;
      height: 15px; 

      border-radius: 50%;
      background-color: var(--anomaly-color);
    }
  }
`;

export default AnomalyRateGraph;