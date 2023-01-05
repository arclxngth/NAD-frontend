import { createTheme } from "@mui/material";

const THEME = createTheme({
  typography: {
    "fontFamily": "var(--font-family)"
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "var(--sidebar-color)",
          color: "var(--white)",
        }
      }
    }
  }
});

export default THEME;