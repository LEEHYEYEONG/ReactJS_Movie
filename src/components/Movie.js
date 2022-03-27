import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres}) {
  return (
    <div className={styles.movie}>
      <div>
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img className ={styles.movie__img} src={coverImg} alt={title} />
      </div>
      <div className={styles.movie__sumgen}>
        <strong>Summary</strong>
        <p>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <strong>Genres</strong>
        <ul className={styles.movie__genres}>
          {genres && genres.map((g)=> (
            <li key={g}> {g}</li>
          ))}
        </ul>
      </div>
      

    </div>
    )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;