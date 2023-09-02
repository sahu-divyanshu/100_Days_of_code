
import "./Card.css"
// import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
const Card = ({movie}) => {
    // const [isLoading,setIsLoading] = useState(true);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setIsLoading(false)
    //     },1500)
    // },[])

  return (
    // isLoading
    // ?
    // <div className='cards'>
    //     <SkeletonTheme color="#202020" highlightColor='#444'>
    //         <Skeleton height={300} duration={2}/>
    //     </SkeletonTheme>
    // </div>
    // :
    <Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}>
        <div className='cards'>
            <img className='cards-img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=' '/>
            <div className='cards-overlay'>
                <div className='card-title'>{movie.original_title}</div>
                <div>
                {movie.release_date.substring(0, 4)}
                <span>{movie.vote_average } 
                <i class="fa fa-star" aria-hidden="true"> </i></span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Card
