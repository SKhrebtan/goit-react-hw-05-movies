import { Suspense } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();
    console.log(movieId)
    return (
        <div>
            <h1>One movie details: {movieId}</h1>
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