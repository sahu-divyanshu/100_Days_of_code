import { Avatar, AvatarGroup, Container, ImageList, ImageListItem, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme)=>({
  main:{
    paddingTop:60,
    position:"sticky",
    top:0,
    height:"100vh",
    [theme.breakpoints.down("sm")]:{
      display:"none",
  },
  },

}))

const Rightbar = () => {
    const classes = useStyles();
  return (
    <Container className={classes.main} >
      <Typography variant="h6"style={{margin:"20px 0"}}>Online Friends</Typography>
        <AvatarGroup total={7} style={{position:"relative",right:20,marginBottom:"20px"}}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>
      <Typography variant="h6"style={{margin:"0"}}>Gallery</Typography>
      <ImageList sx={{ width: 280, height: 280 }} cols={2}  >
  
          <ImageListItem >
            <img  src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
          </ImageListItem>
          <ImageListItem >
            <img  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format"/>
          </ImageListItem>
          <ImageListItem >
            <img  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format"/>
          </ImageListItem>
          <ImageListItem >
            <img  src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format"/>
          </ImageListItem>

        
      </ImageList>

      <Link href="" style={{margin:5}}>Sport</Link>
      <Link href="" style={{margin:5}}>Food</Link>
      <Link href="" style={{margin:5}}>Movies</Link>
      <Link href="" style={{margin:5}}>Science</Link>
    </Container>
  )
}

export default Rightbar
