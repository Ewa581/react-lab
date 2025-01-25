import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList"; 
function App() {
    const [movies, setMovies] = useState([]);
    

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <MovieList movies={movies} /> {/* Renderujemy listę filmów */}
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} />
        </div>
    );
}

export default App;
