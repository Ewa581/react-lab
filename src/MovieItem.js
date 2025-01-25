function MovieItem({ movie }) {
    return (
        <li>
            {movie.title} ({movie.year})
        </li>
    );
}

export default MovieItem;
