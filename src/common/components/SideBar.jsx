import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DividerLine from './DividerLine';

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  if(location.pathname === '/') {
    return null;
  }

  function onHandleClick(path) {
    navigate(path);
  }
  
  const drawer = (
    <div>
      <ImageContainer>
        <img src="icons/NAD-logo.png" alt="" />
      </ImageContainer>
      <DividerLine color="var(--white)"/>
      <List>
        {['Home', 'Traffic', 'Demo'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={(e) => onHandleClick("/" + text.toLowerCase())}>
              <ListItemText primary={text} key={text}/>
            </ListItemButton> 
          </ListItem>
        ))}
      </List>
      <DividerLine color="var(--white)"/>
    </div>
  );

  return (
    <>
      <Container>
        <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "var(--sidebar-width)" },
            }}
            open
          >
            { drawer }
        </Drawer>
      </Container>
    </>
  )
}

const Container = styled.div`
`;

const ImageContainer = styled.div`
  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 1vh;

    width: 100%;
  }
`;

export default SideBar;