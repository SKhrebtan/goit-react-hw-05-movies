const key = '7704615e0d5baf851bf04ec2239749fe';

export default function FetchMovies (value) {
return fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${key}`)
}