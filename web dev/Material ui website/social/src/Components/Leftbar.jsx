import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const useStyles = makeStyles((theme)=>({
    main:{
    
      paddingTop:60,
      position:"sticky",
      top:0,

   
  
      backgroundColor:theme.palette.primary.main,
      height:"100vh",
      color:"white",
      [theme.breakpoints.up("sm")]:{
          backgroundColor:"white",
          color:"#555",
          border:"1px solid #B0C4DE"
      },

      
    },
    item:{
      display:"flex",
      marginTop:theme.spacing(5),
  
      [theme.breakpoints.up("sm")]:{
        marginTop:theme.spacing(3),
     
        cursor:"pointer"
      },
 
    }
    ,
    text:{
      
      [theme.breakpoints.down("sm")]:{
        display:"none",
      }
    },

    
}))

const Leftbar = () => {
    const classes = useStyles();
  return (

    <Container className={classes.main}>
      <div className={classes.item}>
        <HomeIcon />
        <Typography className={classes.text} style={{marginLeft:"10px"}}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon/>
        <Typography className={classes.text} style={{marginLeft:"10px"}}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <FormatListBulletedIcon/>
        <Typography className={classes.text} style={{marginLeft:"10px"}}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <CameraAltIcon/>
        <Typography className={classes.text} style={{marginLeft:"10px"}}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutlineIcon/>
        <Typography className={classes.text} style={{marginLeft:"10px"}}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMacIcon/>
        <Typography className={classes.text} style={{marginLeft:"10px"}}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <StorefrontIcon/>
        <Typography className={classes.text} style={{marginLeft:"10px"}}>Market </Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon/>
        <Typography className={classes.text} style={{marginLeft:"10px"}}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToAppIcon/>
        <Typography className={classes.text} style={{marginLeft:"10px"}}>Logout</Typography>
      </div>
      
    </Container>

  )
}

export default Leftbar
