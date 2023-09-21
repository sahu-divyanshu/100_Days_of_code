import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Post from "../Components/Post"


const useStyles = makeStyles((theme)=>({
  main:{
    marginTop:60,
  }
}))
const Feed = () => {
    const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Post/>
      <Post/>
      <Post/>

    </Container>
  )
}

export default Feed
