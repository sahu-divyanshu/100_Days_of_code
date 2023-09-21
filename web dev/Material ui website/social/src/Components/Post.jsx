import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,Button } from "@mui/material"
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme)=>({
  main:{
    marginTop:70,
  },
  media:{
    height:300,
    
  },
}))

const Post = () => {
    const classes = useStyles();
  return (
    <Card className={classes.main}>
        <CardActionArea>
            <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"/>
            <CardContent>
                <Typography variant="h6" gutterBottom>My First Post</Typography>
                <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae quis adipisci ratione iure perspiciatis non pariatur aperiam officiis rerum?</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button  size="small" color="primary"> Learn More</Button>


        </CardActions>
    </Card>
  )
}

export default Post
