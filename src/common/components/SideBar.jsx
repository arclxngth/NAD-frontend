import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import styled from 'styled-components';

function SideBar() {
  const drawer = (
    <div>
      <ImageContainer>
        <img src="icons/NAD-logo.png" alt="" />
      </ImageContainer>
      <Divider
        sx={{ 
          borderColor: "var(--white)",
          width: "90%",
          margin: "10px",
        }}
      />
      <List>
        {['Home', 'Traffic', 'Demo'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{ 
          borderColor: "var(--white)",
          width: "90%",
          margin: "10px",
        }}
      />
    </div>
  );

  return (
    <>
      <Container>
        <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "10%" },
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

    margin: 20px 1px;

    width: 100%;
  }
`;

export default SideBar;