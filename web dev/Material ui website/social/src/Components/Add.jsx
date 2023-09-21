import {  Alert, Button, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";


const useStyles = makeStyles((theme)=>({
    container:{
      width:400,
      margin:"auto",
      height:500,
      backgroundColor:"white",
      position:"relative",
      top:"8%",
      [theme.breakpoints.down("sm")]:{
        width:"100vw",
        height:"100vh",
      }
    }


}))

const Add = () => {
    const classes = useStyles();
const[open,setOpen] = useState(false);
const[openA,setOpenA] = useState(false);
  const handleClose= (event,reason)=>{
    if(reason === 'clickaway'){
      return;
    }
    setOpenA(false);
  }

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
        <Fab color="primary" style={{ position:"fixed", bottom:10,right:10,}}>
          <AddIcon/>
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <div className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}> 
              <TextField id="standard-basic" label="Title" variant="standard" size="small" style={{width:"90%" ,margin:"10px 19px"}}/>

            </div>
            <div className={classes.item}> 
              <TextField      
                  id="standard-multiline-static"
                  label="Description"
                  multiline
                  rows={2}
              
                  variant="standard" style={{width:"90%" ,margin:"5px 19px"}}/>
              </div>
            <div className={classes.item}> 
                <TextField select label="Visibility" defaultValue="Public" style={{width:"90%" ,margin:"10px 19px"}}>
                  <MenuItem value="Public" >Public</MenuItem>
                  <MenuItem value="Private" >Private</MenuItem>
                  <MenuItem value="Unlisted" >Unlisted</MenuItem>
                </TextField>
            </div>
            <div style={{width:"90%" ,margin:"10px 19px"}}>
              <RadioGroup>
                <FormLabel component="legend">Who Can Comment</FormLabel>
                <FormControlLabel value="female" control={<Radio size="small" />} label="Everybody" />
                <FormControlLabel value="male" control={<Radio size="small" />} label="Friends" />
                <FormControlLabel value="other" control={<Radio size="small" />} label="Nobody" />
              </RadioGroup>
            </div>
            <div style={{width:"90%" ,margin:"10px 19px"}}>
            <Button variant="outlined" style={{marginRight:"19px"}} onClick={()=>{setOpenA(true);setOpen(false)}}>Create</Button>
              <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)} >Cancel</Button>
            </div>
          </form>
        </div>
      </Modal>
      <Snackbar open={openA} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Add
