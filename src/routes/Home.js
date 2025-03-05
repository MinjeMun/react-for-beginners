import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import "../styles/Home.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movies);
                setLoading(false);
            });
    }, []);

    return (
        <div className="home-container">
            <h1>Movie List ({movies.length})</h1>
            {loading ? <h1 className="loading-text">Loading...</h1> : null}
            <div className="movie-list">
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        genres={movie.genres}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
