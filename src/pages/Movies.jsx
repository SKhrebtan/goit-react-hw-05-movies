import { Link, useParams } from "react-router-dom";

const Movies = () => {
    const film = useParams();
    console.log(film)
    return (
        <div>
        <h1>Movies Data</h1>
       { ['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
           return (
               <Link key={movie} to={`${movie}`}>{movie}</Link>
            );
        })}
    </div>)
}

export default Movies;