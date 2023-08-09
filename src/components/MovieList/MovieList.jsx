import { NavLink, useLocation } from "react-router-dom";


const MovieList = ({ movies }) => {
    const location = useLocation();
    console.log(location)
    return (
        <ul >
            {movies.map(({ id, title, vote_average, poster_path }) => {
                return (
                    <NavLink to={`${id}`}  key={id}><li key={id} state={{ from: location }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="320"></img>
                        <h2 >{title}</h2>
                        <p>{vote_average}</p>
                   </li></NavLink> 
                   )
            })}  
    </ul>
)
}

export default MovieList;