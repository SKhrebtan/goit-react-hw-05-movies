import css from './MovieInfo.module.css';
import { useLocation } from 'react-router-dom';


export default function MovieInfo({ movie }) {
    const location = useLocation();
    console.log(location)
    const { original_title, overview, poster_path, vote_average, genres } = movie;
    const filmgenres = [];
    if (genres) {
       Object.values(genres).forEach(value => filmgenres.push(value.name)) 
   }
   
    return (
        <div className={css.wrapper}>
            <div className={css.thumb}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title}></img>
            </div>
            <div>
                <h1>{original_title}</h1>
                <p>User score: {vote_average}</p>
                <p>Overview</p>
                <p>{overview}</p>
                 <p>Genres</p>
                <p>{filmgenres.join(', ')}</p>
            </div>
        </div>
    )
}