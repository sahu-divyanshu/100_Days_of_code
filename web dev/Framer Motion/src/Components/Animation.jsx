import React from 'react'
import "../App.css"
import {motion,useAnimationControls }from"framer-motion"
const Animation = () => {
    const control = useAnimationControls();
    const handleClick=()=>{
      control.start("flip");
    }
  return (
    <div className='grid place-content-center h-screen gap-3'>
        <button 
        onClick={handleClick}
        className='example-button'>Flip it</button>
        <motion.div className='w-40 h-40 bg-black'
        variants ={{
            initial:{
                rotate:"0deg"
            },
            flip:{
                rotate:"360deg"
            },

        }}
        // whileHover="flip"
        initial="initial"
        animate={control}
        >
      
        </motion.div>
    </div>

  )
}

export default Animation
