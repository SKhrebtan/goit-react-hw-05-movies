import { useEffect, useState } from 'react';
import { lazy } from 'react';
const TrendingList = lazy(() => import('../components/TrendingList/TrendingList'))

  async function FetchFilms() {
             const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=7704615e0d5baf851bf04ec2239749fe');
             const data = await response.json();
             return data
         }
const Home = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
       
      FetchFilms().then(({ results }) => setFilms(films => [...results]))     
     },[])
    
    return (<div><TrendingList movies={films} /></div>)
}

export default Home;

    // FetchFilms().then(({ results }) => {
    //          const recievedMovies = [];
    //          results.map(({ id, original_title, vote_average, overview, poster_path }) => {
    //              const newMovie = {
    //                  id,
    //                  title: original_title,
    //                  overview,
    //                  poster: poster_path,
    //                  user_score: vote_average,
    //              }
    //           return  recievedMovies.push(newMovie)
    //          }
    //                         )
    //          setFilms(recievedMovies);
            
    //      })