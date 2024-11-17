import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ContactDetails from "./components/ContactDetails";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3474F3",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
          <Sidebar />
          <MainContent />
          <ContactDetails />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
