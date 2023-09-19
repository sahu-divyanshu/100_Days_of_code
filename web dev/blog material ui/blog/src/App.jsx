
import {Container, Grid} from '@mui/material'
import './App.css'
import Header from './components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Featuredpost from './components/Featuredpost';
import { makeStyles } from "@mui/styles";
import { featuredPosts, sidebar } from './Data/Data';
import PostCard from './components/PostCard';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles({
    main:{
      marginTop:-30,    
    },
    grid:{
      marginTop:10,
    },

    
})
function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const classes = useStyles();

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Container className={classes.main} >
        <Header />
        <Featuredpost/>
        <br/>
        <Grid container spacing={3}>
          {
            featuredPosts.map((post)=>(
              <PostCard post={post} key={post.title}/>
            ))
          }
        </Grid>
        <Grid container spacing={4} className={classes.grid}  >
          <Main className={classes.mc} />
          <Sidebar title={sidebar.title}
          description = {sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
          
          />
        </Grid>
      </Container>
    </ThemeProvider>

    </>
  )
}

export default App
