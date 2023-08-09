import { useEffect, useState, lazy } from 'react';

 
const TrendingList = lazy(() => import('../components/TrendingList/TrendingList'))

  async function FetchFilms() {
             const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=7704615e0d5baf851bf04ec2239749fe');
             const data = await response.json();
             return data
         }
const Home = () => {

    const [films, setFilms] = useState([]);
       useEffect(() => {
       
      FetchFilms().then(({ results }) => setFilms([...results]))     
     },[])
    
    return <TrendingList movies={films} />
}

export default Home;
