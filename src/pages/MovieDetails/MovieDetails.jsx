import { Suspense, useState, useEffect, lazy, useRef } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import FetchMovieById from "../../components/Fetches/FetchMovieById"
import { TiArrowBack } from 'react-icons/ti'
import PropTypes from 'prop-types';
import { Title, Container, List, ListItem, StyledLink, StyledNavLink} from './MovieDetails.styled'
const MovieInfo = lazy(()=>import('../../components/MovieInfo/MovieInfo'))

const MovieDetails = () => {
    const [film, setFilm] = useState({})
    const { movieId } = useParams();
    const location = useLocation();
   
 const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    
    useEffect(() => {
         FetchMovieById(movieId).then(data => setFilm(data))
    }, [movieId])
    return (
        <Container>
            <StyledLink to={backLinkLocationRef.current}>Back<TiArrowBack size={30 } /></StyledLink>
            <MovieInfo movie={film} />
            <Title>Additional information</Title>
            <List>
                
                <ListItem>
                    <StyledNavLink to="cast">Cast</StyledNavLink>
                </ListItem>
                <ListItem>
                    <StyledNavLink to="reviews">Reviews</StyledNavLink>
                </ListItem>
            </List>
            <Suspense fallback="isLoading">
                 <Outlet/>
            </Suspense>
           
        </Container>
    )
}
export default MovieDetails;

MovieDetails.propTypes = {
    film: PropTypes.object,
}