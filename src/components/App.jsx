import { Route, Routes } from "react-router-dom";
import Home from "pages/Home"
import Movies from "pages/Movies";
import Layout from "./Layout";
import MovieDetails from "pages/MovieDetails";

export const App = () => {
  return (
          <Routes>
        <Route path="/" element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}> 
                <Route path="cast" element={<div>Casting</div>} />
                <Route path="reviews" element={<div>reviews</div>}/>
           </Route>
          </Route>
          </Routes>
  );
};
