import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import {Form, Input, Button} from './Searchbar.styled'
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
        <Form onSubmit={handleSubmit}>
        <label>
            <Input type="text" value={movieId} onChange={handleInputChange} />
            </label>
            <Button>Search</Button>
        </Form >
    )
}

Searchbar.propTypes = {
    searchParams: PropTypes.string,
    onSubmit: PropTypes.func,
}