import PropTypes from "prop-types";
import "../styles/Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres, showLink = true }) {
    console.log(process.env.PUBLIC_URL);
    return (
        <div className="movie-container">
            <img src={coverImg} alt={title} />
            <h3 className="movie-title">
                {showLink ? (
                    <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
                        {title}
                    </Link>
                ) : (
                    title
                )}
            </h3>
            <p className="movie-summary">{summary}</p>
            <ul className="genre-list">
                {genres.map((g) => (
                    <li key={g} className="genre-tag">
                        {g}
                    </li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    showLink: PropTypes.bool,
};

export default Movie;
