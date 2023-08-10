import { Suspense, useState, useEffect, lazy, useRef } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
const MovieInfo = lazy(()=>import('../components/MovieInfo/MovieInfo'))

async function FetchFilms(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7704615e0d5baf851bf04ec2239749fe`);
    const data = await response.json();
   
    return data
}
         
const MovieDetails = ({firstsearch}) => {
    const [film, setFilm] = useState({})
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
 
    const { pathname, search } = backLinkLocationRef.current;
    useEffect(() => {
         FetchFilms(movieId).then(data => setFilm(data))
    }, [movieId])
    return (
        <div>
            <NavLink to={`${pathname}${search}`}>Back to the Movies</NavLink>
            <MovieInfo movie={film} />
            <h2>Additional information</h2>
            <ul>
                
                <li>
                    <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews">Reviews</NavLink>
                </li>
            </ul>
            <Suspense fallback="isLoading">
                 <Outlet/>
            </Suspense>
           
        </div>
    )
}
export default MovieDetails;