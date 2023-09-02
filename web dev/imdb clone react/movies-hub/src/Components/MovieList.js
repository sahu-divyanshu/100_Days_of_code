
import React, { useEffect, useState }  from 'react'
import "./MovieList.css"
import Card from "./Card"
import { useParams } from 'react-router-dom'
const MovieList = () => {
    const[movieList,setMovieList] = useState([]);
    const{type} = useParams();


    useEffect(()=>{
        getData("");
    },[])
    
    useEffect(()=>{
        getData(type);
    },[type])

    const getData = (type) =>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type :"popular"}?api_key=968938cf56a300a082ddb7bada2aa272`)
        .then(res => res.json())
        .then(data => setMovieList(data.results));
    }

    return (
        <div className='movie_list'>
            <h2 className='list-title'>{(type ? type :"POPULAR").toUpperCase()}</h2>
            <div className='list-cards'>
                {
                    movieList.map(movie=>(
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
