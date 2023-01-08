import styled from "styled-components";
import { Menu, MenuItem } from '@mui/material';
import React from "react";

import DividerLine from "./DividerLine";
import anomaly_count from "../dummies/anomaly-count.json"

function AnomalyDisplay({ title }) {
  
  const [ auth, setAuth ] = React.useState(true);
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container>
        <h1>{ title }</h1>
        <DividerLine thic="10px" color="var(--background-color)" />
        <Table>
          <TableHeader>
            <h3>IP ADDRESS</h3>
            <h3>COUNT</h3>
          </TableHeader>
          <TableBody>
            {anomaly_count.map((record) => {
              return (
                <>
                  <h3>{record.ip}</h3>
                  <h3>{record.count}</h3>
                  <Button><img src="/icons/dehaze.png"/></Button>
                  {/* <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu> */}
                </>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}

const Button = styled.button`
  /* width: 1vw;
  height: 1vh; */

  img {
    width: 1vw;
    height: 2vh;
  }
`;

const TableBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  background-color: #C5C5C5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  height: 25vh;

  color: black;

  overflow-y: scroll;

  h3 {
    text-align: center;
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  background-color: #C5C5C5;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin-bottom: 10px;

  h3 {
    color: black;
    text-align: center;
  }
`;

const Table = styled.div`
  margin: 30px;
`;

const Container = styled.div`
  background-color: var(--white);
  margin: var(--card-margin);
  padding: var(--card-padding);
  
  box-shadow: var(--card-box-shadow);

  width: 40vw;

  h1 {
    margin: var(--card-header-margin);

    color: black;
    font-weight: bold;
  }
`;

export default AnomalyDisplay;