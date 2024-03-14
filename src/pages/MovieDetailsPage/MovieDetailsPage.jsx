import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById, getImagePatch } from "../../api/movies-api";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [urlPatch, setUrlPatch] = useState("");

  useEffect(() => {
    const movieDetails = async () => {
      setIsLoading(true);
      try {
        const getMovieInfo = await getMovieById(movieId);
        const imagePatch = await getImagePatch();
        const { base_url, backdrop_sizes } = imagePatch;
        const imageUrl = `${base_url}${backdrop_sizes[0]}`;

        setUrlPatch(imageUrl);

        setMovies(getMovieInfo);
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
      <div className={css.goBack}>
        <Link to="/">Go back</Link>
      </div>
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP error!</b>}
      <div >
        <div className={css.movies}></div>
        {movies && (
          <div className={css.movieDetails}>
            <img src={`${urlPatch}${movies.poster_path}`} alt={movies.title} />
            <div className={css.details}>
              <h2> {movies.title}</h2>
              <h3>
                Rating :{" "}
                <span className={css.text}> {movies.vote_average}</span>
              </h3>
              <h3> User Score: </h3>{" "}
              <span className={css.text}> {movies.vote_count}</span>
              <h3> Overview</h3>
              <span> {movies.overview}</span>
              <h3> Genres </h3>
              <ul>
                {movies.genres &&
                  movies.genres.map((genre) => {
                    return <li key={genre.id}>{genre.name}</li>;
                  })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className={css.movies}></div>
      <div>
        <p> Additional information</p>
        <ul>
          <li>
            <Link to="cast"> Cast</Link>
          </li>
          <li>
            <Link to="reviews"> Reviews </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
