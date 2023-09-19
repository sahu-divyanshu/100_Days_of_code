
import './App.css'
import NavBar from './Components/NavBar'


import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#1F75FE',
      main: '#1F75FE',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {


  return (
    <>
        <ThemeProvider theme={darkTheme}>
        <NavBar/>
        </ThemeProvider>

    </>
  )
}

export default App
