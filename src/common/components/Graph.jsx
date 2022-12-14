import CanvasJSReact from '../../assets/canvasjs.react';

import styled from 'styled-components';
import DividerLine from './DividerLine';

let dataPoints =[];

function Graph({ title, }) {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    data: [{				
      type: "column",
      dataPoints: [
        { label: "Apple",  y: 10  },
        { label: "Orange", y: 15  },
        { label: "Banana", y: 25  },
        { label: "Mango",  y: 30  },
        { label: "Grape",  y: 28  }
      ]
    }]
 }

  return (
    <>
      <Container>
        <h1>{ title }</h1>
        <DividerLine color="var(--background-color)" thic="10px" />
        <CanvasJSChart options={options}/>
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