import PropTypes from 'prop-types';

export default async function FetchCast(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7704615e0d5baf851bf04ec2239749fe&total_results=30`);
    const data = await response.json();
    
    return data
}

FetchCast.propTypes = {
    id: PropTypes.string
}

