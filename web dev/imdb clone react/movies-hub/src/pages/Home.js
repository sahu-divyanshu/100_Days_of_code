import React, { useEffect, useState } from 'react'
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import{Link} from "react-router-dom"
import MovieList from '../Components/MovieList';

const Home = () => {
    
  const[popular,setPopular] = useState([]);  
 
  
  useEffect(() =>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=968938cf56a300a082ddb7bada2aa272")
      .then(res => res.json())
      .then(data => setPopular(data.results));                  
    },[])
  return (
    <div className='poster'>
      <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
        {popular.map(movie=>(
          <Link className='car' style={{textDecoration:"none" ,color:"var(--primary)"}} to ={`/movie/${movie.id}`}>
          <div className='poster-img'>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt=''/>
          </div>
          <div className='poster-overlay'>
            <div className='poster-title'><h1>{movie.original_title}</h1></div>
              <div className='poster-runtime'>
               <span className='poster-r'>{movie.release_date.substring(0, 7)}</span> 
                <span className='poster-rating poster-r'>
                 {movie.vote_average}{" "}
                  <i class="fa fa-star" aria-hidden="true"> </i>
                </span>
              </div>
   
              
            </div>
       
          </Link>
        ))}

      </Carousel>
      <MovieList/>
    </div>
  )
}
export default Home
