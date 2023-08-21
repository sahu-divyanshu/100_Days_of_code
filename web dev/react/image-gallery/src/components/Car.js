import React ,{useState} from 'react'
import "./Car.css"
import { images } from '../data/galData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faX} from  '@fortawesome/free-solid-svg-icons'


    const Car = ({currentIndex,setClickedImg,setCurrentIndex,clickedImg}) => {



    // ReactDOM.render(element, document.body)
    const [currImg, setCurrImg] = useState(currentIndex);

  return (
   
    <div className='card'>
     <div className='card-inner' style={{backgroundImage: `url(${images[currImg].img})`}}>

        <div className='left' onClick={()=>{
           currImg>0 && setCurrImg(currImg-1);
        }}>
            <FontAwesomeIcon icon={faArrowLeft} /> 
        </div>
        <div className='center'>
            <h1>{images[currImg].title}</h1>
            <p> {images[currImg].subtitle}</p>
            <div className='x' onClick={()=>{
                setClickedImg(null);
                clickedImg = null;
                setCurrentIndex(null);
            }}> <FontAwesomeIcon icon={faX} s/> </div>
           
        </div>
        <div className='right' onClick={()=>{
            currImg<5 && setCurrImg(currImg+1);
        }}>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
     </div>
     </div>

  )
}

export default Car;
