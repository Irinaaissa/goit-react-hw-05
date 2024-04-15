import { Link, useLocation, useParams } from "react-router-dom";
import css from "./MovieList.module.css";
import { getImagePatch } from "../../api/movies-api";
import { useEffect, useState } from "react";
// import { CirclesWithBar } from "react-loader-spinner";
// 
export default function MovieList({ movies }) {
  const { movieId } = useParams();
  const location = useLocation();

  const [urlPatch, setUrlPatch] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const movieDetails = async () => {
      // setIsLoading(true);
      try {
        // const getMovieInfo = await getMovieById(movieId);
        const imagePatch = await getImagePatch();
        const { base_url, poster_sizes } = imagePatch;
        const imageUrl = `${base_url}${poster_sizes[0]}`;
        setUrlPatch(imageUrl);
        // setMovies(getMovieInfo);
      } catch (error) {
        setError(true);
      } finally {
        // setIsLoading(false);
      }
    };
    movieDetails();
  }, [movieId]);

  return (
    <div>
      {/* {isLoading && <b className={css.container }><CirclesWithBar color="#eb0a37"/></b>} */}
      {error && <b>HTTP error!</b>}
      <ul className={css.items}>
        {movies &&
          movies.map((movie) => (
            <li className={css.item} key={movie.id}>
              <img src={`${urlPatch}${movie.poster_path}`} alt={movie.title} />
              <Link  to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
