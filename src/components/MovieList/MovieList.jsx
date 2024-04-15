import { Link, useLocation, useParams } from "react-router-dom";
import css from "./MovieList.module.css";
import { getImagePatch } from "../../api/movies-api";
import { useEffect, useState } from "react";

export default function MovieList({ movies }) {
  const { movieId } = useParams();
  const location = useLocation();

  const [urlPatch, setUrlPatch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    const movieDetails = async () => {
      setIsLoading(true);
      try {
        // const getMovieInfo = await getMovieById(movieId);
        const imagePatch = await getImagePatch();
        const { base_url,poster_sizes
        } = imagePatch;
        const imageUrl = `${base_url}${poster_sizes[0]}`;
        setUrlPatch(imageUrl);
        // setMovies(getMovieInfo);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    movieDetails();
  }, [movieId]);

  return (
    <div>
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP error!</b>}
      <ul className={css.items}>
        {movies &&
          movies.map((movie) => (
            <li className={css.item} key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                <img
                  src={`${urlPatch}${movie.poster_path}`}
                  alt={movie.title}
                />

                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
