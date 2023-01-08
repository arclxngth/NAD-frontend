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
        <Content>
          <h1>{ pageName }</h1>
        </Content>
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
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </User>
      </Container>
    </>
  )
}

const ProfileButton = styled.button`
  width: 100px;
  height: 50px;

  color: black;
`;

const User = styled.div`
  margin: 50px;

  display: flex;
  flex-direction: column;

  align-items: flex-end;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-left: var(--sidebar-width);
`;

const Content = styled.div`
  /* margin-left: var(--sidebar-width); */

  h1 {
    align-items: center;
    font-family: var(--font-family) ;
  }
`;

export default NavBar;