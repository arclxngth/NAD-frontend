import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { Menu, MenuItem } from '@mui/material';

function NavBar({ pageName }) {
  const [ auth, setAuth ] = React.useState(true);
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    localStorage.removeItem("token");
    handleClose();
    navigate("/");
  }

  return (
    <>
      <Container>
        <h1>{ pageName }</h1>
        <User>
          {/* <button><img src="icons/person-logo.png"/></button> */}
          <ProfileButton onClick={handleMenu}><img src="icons/person-logo.png"/></ProfileButton>
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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </User>
      </Container>
    </>
  )
}

const ProfileButton = styled.button`
  width: 5vw;
  height: 6vh;
  float: right;
  
  border: none;
  background-color: var(--background-color);

  img {
    height: 100%;
  }

  :hover {
    cursor: pointer;
  }

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