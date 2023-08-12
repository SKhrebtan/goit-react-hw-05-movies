import { useParams } from "react-router-dom";
import { useEffect, useState, lazy } from "react";
import FetchCast from '../Fetches/FetchCast'
import PropTypes from 'prop-types';
const CastList = lazy(()=>import('../CastList/CastList'))


const Cast = () => {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null)
    const [cast, setCast] = useState([])
     const {movieId} = useParams();
    useEffect(() => {
        setStatus('pending');
    FetchCast(movieId).then(response => {
        if (response.ok) {
           return response.json();
        }
        return Promise.reject(
          new Error('Щось пішло не так, повторіть спробу')
        );
               })
        .then(({cast}) => {
                        setCast(cast)
                      setStatus(status=> cast.length === 0 ? 'empty' : 'resolved')
        })
           .catch(error => { 
        setError(error);
        setStatus('rejected')
      }
    )
    }, [movieId])
    return (
    <>  {status === 'pending' && <div>Loading</div>}
        {status === 'resolved' && <CastList cast={cast} />}
            {status === 'empty' && <h2>Sorry, no information about actors involved</h2>}
            {status === 'error' && <h2>Щось пішло не так: {error}</h2>}
        </>
      )
}

export default Cast;

Cast.propTypes = {
    cast: PropTypes.array,
    status: PropTypes.string,
    error: PropTypes.string,
}