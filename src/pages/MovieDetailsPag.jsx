import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById, getImagePatch } from "../components/api/movies-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [urlPatch, setUrlPatch] = useState("");

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const getMovieInfo = await getMovieById(movieId);
        const imagePatch = await getImagePatch();
        const { base_url, backdrop_sizes } = imagePatch;
        const imageUrl = `${base_url}${backdrop_sizes}[]`;

        setUrlPatch(imageUrl);
        setIsLoading(true);
        setMovies(getMovieInfo);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    movieDetails();
    console.log(movieDetails());
  }, [movieId]);

  return (
    <div>
      <div>
        <Link to="/">Go back</Link>
      </div>

      <div>
        {isLoading && <b>Loading payments...</b>}
        {error && <b>HTTP error!</b>}
        <img src={`${urlPatch}${movies.poster_path}`} alt = {movies.title}/>
        <h2> {movies.title}</h2>
        <p> Rating <span> {movies.vote_average}</span></p>
        <p> User Score </p> <span> {movies.vote_count}</span>
        <p> </p>
        
      </div>
    </div>
  );
}
