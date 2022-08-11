import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette: {
      primary: {
        main: '#020180',
      },
      secondary: {
        main: '#FFB712',
      },
      info: {
        main: '#2F88FF',
      },
      lightMode: {
        main: '#FFFFFF',
      },
      darkMode: {
        main: '#000',
      },
    },
  });

export {theme}