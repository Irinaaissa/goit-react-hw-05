import { useEffect, useState } from "react";
import { getMovieReviews } from "../../api/movies-api";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    const filmDescription = async () => {
      setIsLoading(true);
      if (!movieId) {
        return;
      }
      try {
        const response = await getMovieReviews(movieId);

        setReviews(response.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    filmDescription();
  }, [movieId]);
  return (
    <>
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP error!</b>}

      {reviews.length > 0 ? (
        <ul>
          {reviews.map((rev) => (
            <li key={rev.id}>
              <h4>{`Author: ${rev.author}`}</h4>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      )
      : (
        <p>No information available at this time</p>)
    }
    </>
  );
}
