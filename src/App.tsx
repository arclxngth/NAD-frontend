import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import LoginPage from "./modules/login/pages/login-page"
import HomePage from "./modules/home/pages/home"
import Variables from "./styles/Variables"
import Fonts from "./styles/Fonts"
import Reset from "./styles/Reset";
import THEME from "./styles/MUI-theme";
import TrafficPage from "./modules/traffic/pages/traffic-page";
import SideBar from "./common/components/SideBar";
import NavBar from "./common/components/NavBar";

function App() {
  return (
    <>
      <ThemeProvider theme={THEME}>
      <Fonts />
      <Variables />
      <Reset />
      <SideBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/traffic" element={<TrafficPage />}/>
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
