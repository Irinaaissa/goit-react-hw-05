import { getMovieCredits, getActorPatch } from "../../api/movies-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { CirclesWithBar} from 'react-loader-spinner'

export default function MovieCast() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [urlPatch, setUrlPatch] = useState("");

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    const actorDetails = async () => {
      setIsLoading(true);
      if (!movieId) {
        return;
      }
      try {
        const imagePatch = await getActorPatch();
        const { base_url, poster_sizes } = imagePatch;
        const profileUrl = `${base_url}${poster_sizes[1]}`;
        const response = await getMovieCredits(movieId);
        setUrlPatch(profileUrl);

        setMovies(response);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    actorDetails();
  }, [movieId]);
  return (
    <div className={css.movies}>
      {isLoading && <b className={css.container }><CirclesWithBar color="#eb0a37"/></b>}
      {error && <b>HTTP error!</b>}
      <div>
        <ul className={css.list}>
          {movies.map((actor) => (
            <li 
            className={css.text}
            key={actor.id}>
              <img
                className={css.img}
                src={
                  actor.profile_path
                    ? `${urlPatch}${actor.profile_path}`
                    : defaultImg
                }
                alt={`${actor.name} photo`}
              />
              <div className={css.details}>
                <h3>{actor.name}</h3>
                <p>Character: </p>
                <span className={css.details}>{actor.character}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
