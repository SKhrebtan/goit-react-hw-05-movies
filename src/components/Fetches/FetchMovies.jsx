const key = '7704615e0d5baf851bf04ec2239749fe';

export default function FetchMovies () {
return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
}
