import { useParams } from "react-router-dom";
import { useEffect, useState, lazy } from "react";
const CastList = lazy(()=>import('../CastList/CastList'))

async function FetchFilms(id) {
             const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7704615e0d5baf851bf04ec2239749fe&total_results=30`);
    const data = await response.json();
    
             return data
}
const Cast = () => {
    const [cast, setCast] = useState([])
    const {movieId} = useParams();
    useEffect(() => {
    FetchFilms(movieId).then(({cast})=>setCast(cast))
    }, [movieId])
    console.log(cast)
    return <CastList cast={cast} />
}

export default Cast;