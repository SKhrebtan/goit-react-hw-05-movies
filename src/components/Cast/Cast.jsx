import { useParams } from "react-router-dom";
import { useEffect, useState, lazy } from "react";
import FetchCast from '../Fetches/FetchCast'
import PropTypes from 'prop-types';
const CastList = lazy(()=>import('../CastList/CastList'))


const Cast = () => {
    const [cast, setCast] = useState([])
    const {movieId} = useParams();
    useEffect(() => {
    FetchCast(movieId).then(({cast})=>setCast(cast))
    }, [movieId])
    console.log(cast)
    return <CastList cast={cast} />
}

export default Cast;

Cast.propTypes = {
    cast: PropTypes.array,
}