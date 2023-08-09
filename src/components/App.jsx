import { NavLink, Route, Routes } from "react-router-dom";
import Home from "pages/Home"
import Movies from "pages/Movies";
export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={ <div>Movie Detail</div>} />
      </Routes>
    </div>
  );
};