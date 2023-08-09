import { Suspense, useState, useEffect, lazy } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
const MovieInfo = lazy(()=>import('../components/MovieInfo/MovieInfo'))

async function FetchFilms(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7704615e0d5baf851bf04ec2239749fe`);
    const data = await response.json();
   
    return data
}
         
const MovieDetails = () => {
    const [film, setFilm] = useState({})
    const { movieId } = useParams();
   
    useEffect(() => {
         FetchFilms(movieId).then(data => setFilm(data))
    }, [movieId])
    return (
        <div>
            <NavLink to='/movies'>Back to the Movies</NavLink>
            <MovieInfo movie={film}  />
            <ul>
                <h3>Additional information</h3>
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