"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#e2e3e7",
        },
      },
    },
  },
});

export default theme;
