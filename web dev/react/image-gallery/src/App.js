
import './App.css';
import { images } from './data/galData'
import React,{useState} from "react";
import Car from './components/Car';
function App() {


  const[clickedImg,setClickedImg] = useState(null);
  const[currentIndex,setCurrentIndex] = useState(null);

  const handleClick = ( images,index)=>{
    setCurrentIndex(index);
    setClickedImg(images[index].img)
  }


  return (
    <div className="App" >
      <div className = "car">
      
        <div className='car-inner'  style={{backgroundImage: `url(${images[0].img})`}}
        onClick={()=>handleClick(images, 0 )}>
          
        </div>

        <div className='car-inner'  style={{backgroundImage: `url(${images[1].img})`}}
          onClick={()=>handleClick(images, 1)}>
      
        </div>
        <div className='car-inner'  style={{backgroundImage: `url(${images[2].img})`}}
          onClick={()=>handleClick(images, 2)}>
      
       </div>
      </div>
      <div className = "car">
        <div className='car-inner'  style={{backgroundImage: `url(${images[3].img})`}}
          onClick={()=>handleClick(images, 3)}>
      
        </div>
        <div className='car-inner'  style={{backgroundImage: `url(${images[4].img})`}}
          onClick={()=>handleClick(images, 4)}>
      
        </div>
        <div className='car-inner'  style={{backgroundImage: `url(${images[5].img})`}}
          onClick={()=>handleClick(images, 5)}>
      {(clickedImg!==null) && <Car currentIndex={currentIndex} setClickedImg={setClickedImg} setCurrentIndex={setCurrentIndex} clickedImg={clickedImg}/>}
        </div>
      </div>
      
    </div>
  );
}

export default App;
