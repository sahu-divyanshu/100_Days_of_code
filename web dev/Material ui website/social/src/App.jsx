
import { Grid } from '@mui/material';
import './App.css'
import NavBar from './Components/NavBar'


import { ThemeProvider, createTheme } from '@mui/material/styles';
import Leftbar from './Components/Leftbar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import Add from './Components/Add';

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
        <Grid container >
          <Grid item sm={2} xs={2}>
            <Leftbar/>
          </Grid>
          <Grid item sm={7} xs={10}>
            <Feed/>
          </Grid>
          <Grid item sm={3} xs={0}> 
            <Rightbar/>
          </Grid>

        </Grid>
        <Add/>
        </ThemeProvider>

    </>
  )
}

export default App
