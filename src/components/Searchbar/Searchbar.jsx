import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Searchbar({onSubmit}) {
    const [searchParams, setSearchParams] = useSearchParams();
    let movieId = searchParams.get('query') ?? '';
 
    useEffect(() => {
          const search = searchParams.get('query') ?? '';
          onSubmit(search)
        // eslint-disable-next-line
     }, [])
   
    function handleInputChange(e) {
        const value = e.target.value;
        if (value === '') {
            return setSearchParams({})
        }
        setSearchParams({ query: value })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(movieId)
       
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

Searchbar.propTypes = {
    searchParams: PropTypes.string,
    onSubmit: PropTypes.func,
}