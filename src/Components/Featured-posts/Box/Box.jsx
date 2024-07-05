import { createBox, createTheme } from '@mui/system';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    }
  }
});

const Box = createBox({ defaultTheme });

export default Box;