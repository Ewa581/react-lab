import MovieItem from "./MovieItem";

function MoviesList({ movies }) {
    return (
        <div>
            <h2>Titles</h2>
            <ul>
                {movies.map((movie) => (
                    <MovieItem key={movie.title} movie={movie} />
                ))}
            </ul>
        </div>
    );
}

export default MoviesList;
