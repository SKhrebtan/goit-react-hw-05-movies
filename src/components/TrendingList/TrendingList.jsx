import { NavLink } from "react-router-dom";
import css from './TrendingList.module.css'

const TrendingList = ({ movies }) => {
        return (
        <ul className={css.trending_list}>
            {movies.map(({ id, title, vote_average, poster_path }) => {
                return (
                    <NavLink to={`movies/${id}`} className={css.trending_list_link} key={id}><li className={css.trending_list_item} key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="320"></img>
                        <h2 className={css.trending_list_title}>{title}</h2>
                        <p>{vote_average}</p>
                   </li></NavLink> 
                   )
            })}  
    </ul>
)
}

export default TrendingList;