import React ,{useState} from 'react'
import "./Car.css"
import { images } from '../Helper/CarData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'


const Car = () => {



    // ReactDOM.render(element, document.body)
    const [currImg, setCurrImg] = useState(0);

  return (
    <div className='car'> 
     <div className='car-inner' style={{backgroundImage: `url(${images[currImg].img})`}}>
        <div className='left' onClick={()=>{
           currImg>0 && setCurrImg(currImg-1);
        }}>
            <FontAwesomeIcon icon={faArrowLeft} /> 
        </div>
        <div className='center'>
            <h1>{images[currImg].title}</h1>
            <p> {images[currImg].subtitle}</p>
        </div>
        <div className='right' onClick={()=>{
            currImg<2 && setCurrImg(currImg+1);
        }}>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
     </div>
    </div>
  )
}

export default Car;
