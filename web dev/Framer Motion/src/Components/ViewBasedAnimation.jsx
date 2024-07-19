import React, { useRef } from 'react'
import {motion, useInView}from"framer-motion"
const ViewBasedAnimation = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)
    

  return (
    <div className='h-[200vh]' >
      <motion.div
        className='h-screen bg-black'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
      
      
      
      >

      </motion.div>
      <div 
        ref={ref}
        className='h-screen bg-red-600 duration-1000 transition-colors'
      
      
      >

      </div>
    </div>

  )
}

export default ViewBasedAnimation
