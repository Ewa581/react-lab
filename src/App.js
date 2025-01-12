import './App.css';
import {useState} from "react";

function App() {

  const [title, setTitle] = useState('Wall-E');

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
   alert(title);
  }

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>My favourite movie for today is {title}</h2>
          {title.length > 0 && <div> {message}</div>}
          <input type="text" onChange={handleChange}/>
          <button onClick={() => alert(title)}>
             Show movie Title 
             </button>
      </div>
  );
}

export default App;