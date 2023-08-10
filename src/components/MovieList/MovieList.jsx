import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import noimage from '../../images/noimage.jpg'
import css from './MovieList.module.css'


const MovieList = ({ movies }) => {

    const location = useLocation();
    
      return (
        <ul className={css.movie_list}>
            {movies.map(({ id, title, vote_average, poster_path, original_title, original_name }) => {
                return (
                    <Link to={`/movies/${id}`} className={css.movie_list_link} key={id} state={{ from: location }}>
                        <li className={css.liitem} key={id} >
                        <img src={poster_path === null ? noimage : `https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="320"></img>
                        <h2 >{title || original_title || original_name}</h2>
                        <p>User score: {vote_average}</p>
                        </li>
                    </Link> 
                   )
            })}  
    </ul>
)
}

export default MovieList;

MovieList.propTypes = {
    movies: PropTypes.array,
}