import styled from 'styled-components';
import { Menu, MenuItem } from '@mui/material';
import React from 'react';

function NavBar({ pageName }) {
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
        <h1>{ pageName }</h1>
        <User>
          <ProfileButton onClick={handleMenu}>Login</ProfileButton>
          <Menu
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
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </User>
      </Container>
    </>
  )
}

const ProfileButton = styled.button`
  width: 5vw;
  height: 5vh;
  float: right;

  color: black;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  margin-right: 2vw;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-left: var(--sidebar-width);
  padding: 1vw 2vw;

  box-shadow: var(--card-box-shadow);

  h1 {
    align-items: center;
    font-family: var(--font-family);
    font-weight: bold;
    color: var(--sidebar-color);
  }
`;

export default NavBar;