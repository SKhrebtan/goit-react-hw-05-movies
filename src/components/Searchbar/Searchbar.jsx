import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from 'react';

export default function Searchbar({onSubmit}) {
    const [searchParams, setSearchParams] = useSearchParams();
    let movieId = searchParams.get('movieId') ?? '';
    const location = useLocation();
console.log(location.search)
    useEffect(() => {
        onSubmit(location.search)
        // eslint-disable-next-line
     }, [])
   
    function handleInputChange(e) {
        const value = e.target.value;
        if (value === '') {
            return setSearchParams({})
        }
        setSearchParams({ movieId: value })
        }
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(movieId)
        setSearchParams(movieId)
}
    return (
        <form onSubmit={handleSubmit}>
        <label>
            <input type="text" value={movieId} onChange={handleInputChange} />
            </label>
            <button>Search</button>
        </form >
    )
}