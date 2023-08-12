import { useEffect, useState, lazy } from 'react';
import PropTypes from 'prop-types';
import FetchMovies from '../../components/Fetches/FetchMovies';
import { RevolvingDot } from 'react-loader-spinner';
import errorImg from '../../images/error.jpg';
 
const MovieList = lazy(() => import('../../components/MovieList/MovieList'))

const Home = () => {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null)
    const [films, setFilms] = useState([]);
    
     
    useEffect(() => {
        setStatus('pending');
                  FetchMovies()
               .then(response => {
        if (response.ok) {
           return response.json();
        }
        return Promise.reject(
          new Error('Щось пішло не так, повторіть спробу')
        );
               })
                      .then(({ results, total_results }) => {
                          setFilms([...results],
                          setStatus(status => total_results === 0 ? 'empty' : 'resolved')
                          )
                      })
           .catch(error => { 
        setError(error);
        setStatus('rejected')
      }
    )
     },[])
    
    return (
        <div>
            {status === 'idle' && <RevolvingDot />}
            {status === 'rejected' && <img src={errorImg} alt={error}></img>}
            {status === 'resolved' && <MovieList movies={films} />}
            
        </div>
    )
}

export default Home;

Home.propTypes = {
    status: PropTypes.string,
    error: PropTypes.string,
    films: PropTypes.array,
}