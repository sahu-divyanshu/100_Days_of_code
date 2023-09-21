import { makeStyles } from "@mui/styles";
import {AppBar, Badge, IconButton, InputBase, Toolbar, Typography} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from "@mui/icons-material/AccountCircle";


const useStyles = makeStyles((theme)=>({
    tool:{
        display:"flex",
        justifyContent:"space-between"
    },
    search:{
        display:"flex",
        alignItems:"center",
        backgroundColor:"#4B9CD3" ,
        '&:hover': {
          backgroundColor: "#00BFFF",
        },
        borderRadius:"5px",
    },
    logolg:{
        display:"none",
        [theme.breakpoints.up("sm")]:{
            display:"block",
        },
    },
    logosm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },
    icons:{
        display:"none",
        [theme.breakpoints.up("sm")]:{
            display:"inline",
        },
    },
    app:{
        position:"fixed",
        top:0,
    },
}))
const NavBar = () => {
    const classes = useStyles();
  return (
    <AppBar className={classes.app} >
      <Toolbar style={{padding:"0 30px"}} className={classes.tool}>
        <Typography variant="h7" className={classes.logolg}>
            Lama Dev
        </Typography>
        <Typography className={classes.logosm} style={{marginRight:"15px"}}>
            Lama
        </Typography>
        <div className={classes.search}>
            <SearchIcon  style={{padding:"0 10px"}}/>
            <InputBase placeholder="Search..." />
        </div>
        <div >
            <div className={classes.icons}>
            <Badge badgeContent={4} color="secondary">
                <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="secondary" style={{margin:"0 5px"}} >
                <NotificationsIcon/>
            </Badge>
            </div>
            <div style={{display:"inline"}}>
            <IconButton style={{color:"white"}}>
            <AccountCircle/>
            </IconButton>
            </div>


        </div>
      </Toolbar>

    </AppBar>
  )
}

export default NavBar
