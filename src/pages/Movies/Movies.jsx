import { lazy, useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import FetchMoviesBySearch from '../../components/Fetches/FetchMoviesBySearch';

import PropTypes from 'prop-types';
import empty from '../../images/empty.jpg';
import errorImg from '../../images/error.jpg';
import {FallingLines} from 'react-loader-spinner';
const Searchbar = lazy(() => import('../../components/Searchbar/Searchbar'));
const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

const Movies = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView();
//     const messagesEndRef = useRef(null);
    
//   const scrollToBottom = () => {
//     messagesEndRef.current && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
//     }
    
    function handleSubmit(value) {
        setValue(value)
        setPage(1)
        }
    
    useEffect(() => {
            if (!value) return;
             setStatus('pending')
            FetchMoviesBySearch(value, page)
                .then(response => {
        if (response.ok) {
           return response.json();
        }
        return Promise.reject(
          new Error('Щось пішло не так, повторіть спробу')
        );
               })
                .then(({ results, total_results }) => {
                    
                          setResult(prevResults => page === 1 ? results : [...prevResults, ...results],
                           
                          setStatus(status => total_results === 0 ? 'empty' : 'resolved')
                          )
                      })
         .catch(error => { 
        setError(error);
        setStatus('rejected')
      }
    )
        
    }, [value, page])
   

    useEffect(() => {
        if (inView) {
        setPage(page => page + 1)
    }
    }, [inView])

    // useEffect( () => {
    // scrollToBottom()
    // }, [result]);
    
    return (
        <div>
            <Searchbar onSubmit={handleSubmit}/>
            {status === 'pending' && <FallingLines />}
            {status === 'empty' && <img src={empty} alt="empty"></img>}
            {status === 'error' && <img src={errorImg} alt={error}></img>}
            {status === 'resolved' && <MovieList movies={result} />}
            {result.length > 0 && <button type="button"
                ref={ref}
                onClick={() => setPage(page => page + 1)}
            >Load more {inView}</button>}
            {/* < div ref = { messagesEndRef } />   */}
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