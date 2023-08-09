import { lazy, useState, useEffect } from "react";
const Searchbar = lazy(() => import('../components/Searchbar/Searchbar'))
const MovieList = lazy(() => import('../components/MovieList/MovieList'))
async function FetchFilms(value) {
             const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=7704615e0d5baf851bf04ec2239749fe&page=1`);
             const data = await response.json();
   
             return data
}
const Movies = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
 
    function handleSubmit(a) {
        setValue(a)
    }
    useEffect(() => {
        if(value)
        FetchFilms(value).then(({results})=>setResult(results))
    },[value])
    return (
        <div>
            <Searchbar onSubmit={handleSubmit} />
            <MovieList movies={result}/>
    </div>)
}

export default Movies;