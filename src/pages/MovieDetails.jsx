import { useParams, Link, Outlet } from "react-router-dom";

const MovieDetails = () => {
    const {movieId} = useParams();
    console.log(movieId)
    return (
        <div>
            <h1>One movie details: {movieId}</h1>
        <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
export default MovieDetails