import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
  const apiKey = "d98196bf";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    const data = await response.json();

    setMovie(data);
  };

  useEffect(() => {
    getMovie("Interstellar");
  }, []);

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}