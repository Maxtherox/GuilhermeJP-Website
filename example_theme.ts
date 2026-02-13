'use client';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#15c98a',
    },
    background: {
      default: '#05070a',
      paper: '#0f1115',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontWeight: 800,
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 800,
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 800,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: 1,
          padding: '12px 25px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: 'rgba(255,255,255,0.02)',
          transition: 'border-color 150ms ease, box-shadow 150ms ease',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255,255,255,0.16)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255,255,255,0.3)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(21,201,138,0.7)',
            boxShadow: '0 0 0 3px rgba(21,201,138,0.14)',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#a5b4c9',
          '&.Mui-focused': {
            color: '#c8f7e5',
          },
        },
      },
    },
  },
});

export default theme;
