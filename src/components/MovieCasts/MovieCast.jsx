import { getMovieCredits, getActorPatch } from "../api/movies-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [urlPatch, setUrlPatch] = useState("");
  
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
    <div className= {css.movies}>
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP error!</b>}
      <div>
        
        <ul className={css.list}>
          {
            movies.map((actor) => (
              <li key={actor.id}>
                <img
                  src={`${urlPatch}${actor.profile_path}`}
                  alt={`${actor.name} photo`}
                />
                <h3>{actor.name}</h3>
                <p>Character: </p><span>{actor.character}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
