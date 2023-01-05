import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import LoginPage from "./modules/login/pages/login-page"
import HomePage from "./modules/home/pages/home"
import Variables from "./styles/Variables"
import Fonts from "./styles/Fonts"
import Reset from "./styles/Reset";
import THEME from "./styles/MUI-theme";

function App() {
  return (
    <>
      <ThemeProvider theme={THEME}>
      <Fonts />
      <Variables />
      <Reset />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
