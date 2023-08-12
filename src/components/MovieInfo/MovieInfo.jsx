import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {Wrapper,Thumb,InfoContainer,Title,InfoText,Image,InfoTextTitle} from './MovieInfo.styled'
import noimage from '../../images/noimage.jpg'

export default function MovieInfo ({ movie }) {
    const location = useLocation();
    console.log(location)
    const { original_title, overview, poster_path, vote_average, genres } = movie;
    const filmgenres = [];
    if (genres) {
       Object.values(genres).forEach(value => filmgenres.push(value.name)) 
   }
   console.log(movie)
    return (
        <Wrapper>
            <Thumb>
                {poster_path === null
                    ? <Image src={noimage} alt="noimage"></Image>
                    : <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title}></Image>}
            </Thumb>
            <InfoContainer>
                <Title>{original_title}</Title>
                <InfoText>User score: {vote_average}</InfoText>
                <InfoTextTitle>Overview</InfoTextTitle>
                <InfoText>{overview}</InfoText>
                 <InfoTextTitle>Genres</InfoTextTitle>
                <InfoText>{filmgenres.join(', ')}</InfoText>
            </InfoContainer>
        </Wrapper>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object,
}