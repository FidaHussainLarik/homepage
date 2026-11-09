import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a192f',
      paper: '#10233f',
    },
    primary: {
      main: '#64ffda',
      contrastText: '#0a192f',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
    divider: 'rgba(136, 146, 176, 0.2)',
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Calistoga", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '-0.04em',
      color: '#ccd6f6',
    },
    h2: {
      fontSize: 'clamp(1.7rem, 3vw, 2.25rem)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#ccd6f6',
    },
    h3: {
      fontSize: '1.1rem',
      fontWeight: 700,
      color: '#ccd6f6',
    },
    body1: {
      lineHeight: 1.8,
      color: '#ccd6f6',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          minHeight: 44,
          borderRadius: 4,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: 'rgba(100, 255, 218, 0.1)',
          color: '#64ffda',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#10233f',
          backgroundImage: 'none',
        },
      },
    },
  },
})
