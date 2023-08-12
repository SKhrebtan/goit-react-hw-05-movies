import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import noimage from '../../images/noimage.jpg'
import { List, ListItem, Thumb, Image, Title, Text,StyledLink } from './MovieList.styled'



const MovieList = ({ movies }) => {
    const location = useLocation();
          return (
        <List>
            {movies.map(({ id, title, vote_average, poster_path, original_title, original_name }) => {
                return (
                    <StyledLink to={`/movies/${id}`} key={id} state={{ from: location }}>
                        <ListItem key={id} >
                            <Thumb><Image src={poster_path === null ? noimage : `https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="320"></Image></Thumb>
                        
                        <Title >{title || original_title || original_name}</Title>
                        <Text>User score: {vote_average}</Text>
                        </ListItem>
                    </StyledLink> 
                   )
            })}  
    </List>
)
}

export default MovieList;

MovieList.propTypes = {
    movies: PropTypes.array,
}