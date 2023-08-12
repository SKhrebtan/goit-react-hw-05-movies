import PropTypes from 'prop-types';
export default function ReviewList({ reviews }) {
    console.log(reviews)
    return (
        <ul>
            {reviews.length === 0 && <h1>SORRY, NO INFO</h1>}
            {reviews.map(({ author, content, id }) => {
                return (
                    <li key={id}>
                        <h2>{author}</h2>
                        <p>{content}</p>
</li>
                )
            })}
        </ul>
       
    )
}

ReviewList.propTypes = {
    reviews: PropTypes.array,
}