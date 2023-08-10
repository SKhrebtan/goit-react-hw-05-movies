import PropTypes from 'prop-types';
export default function ReviewList({ reviews }) {
    
    return (
        <ul>
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