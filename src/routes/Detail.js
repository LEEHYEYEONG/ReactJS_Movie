import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    
    setMovies(json.data.movie);
  
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.movie}>
      <div className={styles.movie__titles}>
        <h1 className={styles.movie__title}>{movie.title}</h1>
        <p className={styles.movie__subtitle}>{movie.title_english}, {movie.year}</p>
        <img className={styles.movie__img} src={movie.large_cover_image} alt = {movie.title} />
      </div>
      
      <div className={styles.movie__sum}>
        <h2>Rating : {movie.rating}</h2>
        <h2>Runtime : {movie.runtime}(minutes)</h2>
        <div>
          <h2>Description</h2>
          <p>{movie.description_full}</p>
        </div>
      </div>
    </div>
    )
  }

export default Detail;