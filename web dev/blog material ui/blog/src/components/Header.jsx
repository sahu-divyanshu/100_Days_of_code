import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material"
import Menu from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { makeStyles } from "@mui/styles";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles(()=>({
    title:{
        flexGrow: 1,
        textAlign:"center",
    },
    tagline:{
        fontSize:20,
        justifyContent:"center",
        textTransform: "uppercase",
        fontFamily:"Montserrat"
    },
    main:{
        marginLeft:-30,
        marginRight:-30,

    }
}));


const Header = () => {
    
    const classes = useStyles();
  return (
    <>
    <Toolbar className={classes.main}>
        <SideDrawer>
        <IconButton >
            <Menu/>    
        </IconButton>   
        </SideDrawer> 
  
        <Typography variant="h6" className={classes.title} >
            Blogging Website
        </Typography>
        <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
                <NotificationsIcon/>
            </Badge>
        
        </IconButton>
        <IconButton color="inherit">
            <AccountCircleIcon/>
        </IconButton>

    </Toolbar>

    <Divider/>

    <Toolbar className={classes.tagline}> Express your emotions through words </Toolbar>
         
    </>
  )
}

export default Header
