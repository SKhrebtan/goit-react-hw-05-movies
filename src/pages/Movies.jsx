import { lazy, useState, useEffect } from "react";
import FetchMoviesBySearch from '../components/Fetches/FetchMoviesBySearch';
import PropTypes from 'prop-types';
import empty from '../images/empty.jpg';
import errorImg from '../images/error.jpg';
import {FallingLines} from 'react-loader-spinner';
const Searchbar = lazy(() => import('../components/Searchbar/Searchbar'));
const MovieList = lazy(() => import('../components/MovieList/MovieList'));


const Movies = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    
    function handleSubmit(value) {
        setValue(value)
      
    }
    
    useEffect(() => {
            if (!value) return;
            console.log(value);
            setStatus('pending')
            FetchMoviesBySearch(value)
                .then(response => {
        if (response.ok) {
           return response.json();
        }
        return Promise.reject(
          new Error('Щось пішло не так, повторіть спробу')
        );
               })
                .then(({ results, total_results }) => {
                          setResult([...results],
                          setStatus(status => total_results === 0 ? 'empty' : 'resolved')
                          )
                      })
         .catch(error => { 
        setError(error);
        setStatus('rejected')
      }
    )
        
    },[value])
    return (
        <div>
            {/* <SearchBox setSearchParams={setSearchParams} /> */}
            <Searchbar onSubmit={handleSubmit}/>
            {status === 'pending' && <FallingLines />}
            {status === 'empty' && <img src={empty} alt="empty"></img>}
            {status === 'error' && <img src={errorImg} alt={error}></img>}
            {status === 'resolved' && <MovieList movies={result} />}
        </div>
    )
}

export default Movies;

Movies.propTypes = {
    value: PropTypes.string,
    result: PropTypes.array,
    error: PropTypes.string,
    status: PropTypes.string,
}