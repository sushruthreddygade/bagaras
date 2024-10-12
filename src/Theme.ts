import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
      mode: 'light', // Change to 'dark' for dark mode
      primary: {
        main: "#20141e",
      },
      secondary: {
        main: '#C0C0C0',
      },
      background: {
        default: '#ffffff', // Light mode background
        paper: '#f5f5f5', // Light mode paper background
      },
      text: {
        primary: '#C0C0C0', // Light mode primary text
        secondary: '#C0C0C0', // Light mode secondary text
      },
    },
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            main: "#20141e",
          },
          secondary: {
            main: '#C0C0C0',
          },
          background: {
            default: '#ffffff', // Light mode background
            paper: '#f5f5f5', // Light mode paper background
          },
          text: {
            primary: '#C0C0C0', // Light mode primary text
            secondary: '#C0C0C0', // Light mode secondary text
          },
        },
      },
    },
  });

  export default theme;