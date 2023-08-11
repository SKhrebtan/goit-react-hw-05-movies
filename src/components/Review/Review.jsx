import { useParams } from "react-router-dom";
import { useEffect, useState, lazy } from "react";
import FetchReviews from '../Fetches/FetchReviews'
import PropTypes from 'prop-types';
const ReviewList = lazy(() => import('../ReviewList/ReviewList'))



const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const {movieId} = useParams();
    useEffect(() => {
    FetchReviews(movieId).then(({results})=>setReviews(results))
    }, [movieId])
    console.log(reviews)
    return (
       reviews.length === 0 ? <h2>Sorry, no reviews</h2> : <ReviewList reviews={reviews} /> )
}

export default Reviews;

Reviews.propTypes = {
    reviews: PropTypes.array,
}