import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[900]
    },
    secondary: {
      main: green[500]
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          margin: 5,
          ...(ownerState.variant === 'outlined' && {
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main
            }),
          ...(ownerState.variant === 'contained' && {
              backgroundColor: theme.palette.primary.main
            })
        })
      }
    }
  }
});

export default theme;