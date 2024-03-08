import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../components/api/movies-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
    console.log(getData());
  }, [movieId]);

  return (
    <div>
      <h2> aaaaaaa: {movieId}</h2>
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP error!</b>}

      {movie && (
        <div>
          <p>Poster: {movie.poster_path}</p>
          <p>Release Date: {movie.release_date}</p>
          
        </div>
      )}
    </div>
  );
}
