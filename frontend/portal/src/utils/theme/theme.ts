import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D7C9A",
      light: "#CFECF5"
    },
    secondary: {
      main: "#F1E3CF",
      light: "#FDFAF3"
    },
    text: {
      primary: "#2E333D",
      secondary: "#484E59"
    }
  },
  components: {
    // Button
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          margin: 5,
          fontWeight: "bold",
          textTransform: "unset",
          border: "1px solid",
          padding: "10px 35px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          borderRadius: 18,
            // Button primary contained
            ...(ownerState.variant === "contained" && ownerState.color === "primary" && {
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.light,
              backgroundColor: theme.palette.primary.light,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.light,
                borderColor: theme.palette.primary.main
              }
            }),
            // Button secondary contained
            ...(ownerState.variant === "contained" && ownerState.color === "secondary" && {
              color: theme.palette.text.secondary,
              borderColor: theme.palette.secondary.main,
              backgroundColor: theme.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.text.secondary,
                borderColor: theme.palette.secondary.main
              }
            }),
            // Button primary outlined
            ...(ownerState.variant === "outlined" && ownerState.color === "primary" && {
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.light,
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main
              }
            }),
            // Button secondary outlined
            ...(ownerState.variant === "outlined" && ownerState.color === "secondary" && {
              color: theme.palette.text.secondary,
              borderColor: theme.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.text.secondary,
                borderColor: theme.palette.secondary.main
              }
            }),
            // Button primary text
            ...(ownerState.variant === "text" && ownerState.color === "primary" && {
              color: theme.palette.primary.main,
              borderColor: "transparent",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main
              }
            }),
            // Button secondary text
            ...(ownerState.variant === "text" && ownerState.color === "secondary" && {
              color: theme.palette.secondary.main,
              borderColor: "transparent",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.text.secondary,
                borderColor: theme.palette.secondary.main
              }
            }),
        })
      }
    }
  }
});

export default theme;