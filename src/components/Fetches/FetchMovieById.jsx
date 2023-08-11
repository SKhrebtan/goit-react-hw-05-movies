import PropTypes from 'prop-types';

export default async function FetchMovieById(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7704615e0d5baf851bf04ec2239749fe`);
    const data = await response.json();
    return data
}

FetchMovieById.propTypes = {
    id: PropTypes.string
}