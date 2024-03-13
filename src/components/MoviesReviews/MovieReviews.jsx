import { useEffect, useState } from "react";
import { getMovieReviews, } from "../api/movies-api";
import { useParams } from "react-router-dom";



export default function MovieReviews(){
    const { movieId } = useParams();
const [reviews, setReviews] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);
const [infoDetailsFilm, setInfoDetailsFilm] = useState("");

useEffect(() => {
    const filmDescription = async () => {
      
      
      
      setIsLoading(true);
      if (!movieId) {
        return;
      }
      try {
        const response = await getMovieReviews(movieId);
        const [status_message] = response;
        const detailsFilm =`${status_message}`
        setInfoDetailsFilm(detailsFilm);

        setReviews(response);
        
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
        {reviews && reviews.length === 0 && (
            <p>We don not post have any review for this movie</p>
        )}
        {reviews && reviews.length > 0 && (
            <ul>
                {reviews.map(rev => (
                    <li key={rev.id}>
                        <h4>{`Author: ${rev.author}`}</h4>
                        <p>{rev.content}</p>
                        <p> `mes:${infoDetailsFilm}`</p>
                    </li>
                ))}
            </ul>
        )}
    </>
);
                }