import { useSearchParams } from "react-router-dom";

export default function Searchbar({onSubmit}) {
    const [searchParams, setSearchParams] = useSearchParams('');
    const movieId = searchParams.get('movieId') ?? '';
    function handleInputChange(e) {
        const value = e.target.value;
        if (value === '') {
            return setSearchParams({})
        }
        setSearchParams({ movieId: value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(movieId)
        setSearchParams({})
}
    return (
        <form onSubmit={handleSubmit}>
        <label>
            <input type="text" value={movieId} onChange={handleInputChange} />
            </label>
            <button>Search</button>
        </form >
    )
}