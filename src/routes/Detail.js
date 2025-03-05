import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie"; // Movie 컴포넌트 불러오기

function Detail() {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState(null);
    const { id } = useParams();

    const getMovie = async () => {
        try {
            const response = await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            );
            const json = await response.json();
            setDetails(json.data.movie);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovie();
    }, [id]);

    if (loading) return <h1>Loading...</h1>;
    if (!details) return <h1>Movie not found</h1>;

    return (
        <Movie
            id={details.id}
            coverImg={details.medium_cover_image}
            title={details.title}
            summary={details.description_full || "No description available"}
            genres={details.genres || []}
            showLink={false} // Detail 페이지에서는 Link 제거
        />
    );
}

export default Detail;
