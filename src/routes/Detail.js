import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  
    setMovies(json.data.movie);
  
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.title_english}, {movie.year}</p>
      <img src={movie.medium_cover_image} alt = {movie.title} />
      <h2>Rating : {movie.rating}</h2>
      <h2>Runtime : {movie.runtime}(minutes)</h2>
      <div>
        <h2>Description</h2>
        <p>{movie.description_full}</p>
      </div>
    </div>
    )
  }

export default Detail;