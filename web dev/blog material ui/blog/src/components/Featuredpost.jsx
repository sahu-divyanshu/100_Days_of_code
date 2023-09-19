import {Button, Card,CardActions,CardContent, Typography, } from "@mui/material"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    title:{
        fontSize:40,
      
        fontFamily:"Montserret"
    },
    cover:{
        backgroundImage:`url(https://plus.unsplash.com/premium_photo-1669839137069-4166d6ea11f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)!important`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        padding:"30px 20px",

    },
    textContainer:{
        backgroundColor:"rgb(0, 0, 0,0.3)"
    }
})

const Featuredpost = () => {
    const classes = useStyles();


  return (
  
      <Card className={classes.cover}>
        <CardContent  className={classes.textContainer}>
            <Typography variant="h4" className={classes.title} gutterBottom>
                Title of a longer featured blog post
            </Typography>
            <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore in suscipit ad totam itaque reprehenderit delectus? Recusandae dicta cum beatae!
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="text" className={classes.btn}>Read More</Button>
        </CardActions>
      </Card>
  
  )
}

export default Featuredpost
