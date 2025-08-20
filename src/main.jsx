import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const theme = createTheme({
  palette:{
    primary:{main: '#114B5F'}, 
    secondary: {main: '#dadadaff'},
    custom: {  //se usa con theme.palette.custom.orange
      white: '#ffffffff',
      black: '#000000ff',
      blueLight: yellow[800],
      
    }
  }
})

window.primary = theme.palette.primary.main
window.secondary = theme.palette.secondary.main
window.custom = theme.palette.custom


createRoot(document.getElementById('root')).render( 
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)
