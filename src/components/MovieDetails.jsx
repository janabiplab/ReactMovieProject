import { useEffect, useState,useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_MOVIE_API}`);
        if (res.data && res.data.Title) {
          setMovie(res.data);
        } else {
          setError("Movie not found.");
        }
      } catch (err) {
        setError("Failed to fetch movie details.");
      }
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div  style={{textAlign:'center'}}>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  );
};

export default MovieDetails;
