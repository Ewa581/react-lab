import './App.css';
import {useState} from "react";
import "milligram"
function App() {

  const [title, setTitle] = useState('Wall-E');

  const movies = [
    {title: "Wall-E"},
    {title: "Pulp Fiction"},
    {title: "Matrix"},
    {title: "1670"},
];

  let message;
  if(title.length < 5) {
    message = "Tytuł jest za krótki"  
  } else if (title.length < 15) {
    message = "Tytuł jest w sam raz"
  } else {
    message = "Tytuł jest za długi"
  }
  function handleChange(event) {
    setTitle(event.target.value);
  }  

  function handleShowMovieClick() {
   setTitle(Event.target.value);
  }

  

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>
    {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
</ul>
          <input type="text" onChange={handleChange}/>
          <button onClick={() => alert(title)}>
             Show movie Title 
             </button>
      </div>
  );
}

export default App;