import { useParams } from "react-router-dom";
import { useEffect, useState, lazy } from "react";
const ReviewList = lazy(() => import('../ReviewList/ReviewList'))


async function FetchFilms(id) {
             const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7704615e0d5baf851bf04ec2239749fe&total_results=30`);
    const data = await response.json();
    
             return data
}
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const {movieId} = useParams();
    useEffect(() => {
    FetchFilms(movieId).then(({results})=>setReviews(results))
    }, [movieId])
    console.log(reviews)
    return (
       reviews.length === 0 ? 'Sorry, no reviews' : <ReviewList reviews={reviews} /> )
}

export default Reviews;