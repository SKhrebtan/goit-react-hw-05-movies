import PropTypes from 'prop-types';

export default function CastList({ cast }) {
    console.log(cast)
    return (
        <ul>
            {cast.map(({id, name, character, profile_path}) => {
                return (
                    <li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name}></img>
                        <h2>{name}</h2>
                        <p>{character}</p>
                    </li>
                )
            })}
        </ul>
    )
}

CastList.propTypes = {
    cast: PropTypes.array,
}