import { NavLink} from "react-router-dom"

const TrendingList = ({ movies }) => {
    console.log(movies)
    return (
        <ul>
            {movies.map(({ id, title, vote_average, overview, poster_path }) => {
                return (
                   <NavLink to={`movies/${id}`} key={id}><li key={id}>
                        <p>{title}</p>
                   </li></NavLink> 
                   )
            })}  
    </ul>
)
}

export default TrendingList;