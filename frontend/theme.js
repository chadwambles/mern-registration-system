import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#67daff',
      main: '#03a9f4',
      dark: '#007ac1',
      contrastText: '#000',
    },
    secondary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff',
    },
      openTitle: '#007ac1',
      protectedTitle: '#007ac1',
      type: 'light'
    }
  })

  export default theme