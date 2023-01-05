import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

function NavBar() {
  return (
    <>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  )
}

const Container = styled.div`
`;

const Content = styled.div`
  
`;

export default NavBar;