import { useEffect, useState } from "react";
import { getMovieReviews, } from "../api/movies-api";
import { useParams } from "react-router-dom";



export default function MovieReviews(){
    const { movieId } = useParams();
const [movies, setMovies] = useState([]);
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
        
        setMovies(response);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    filmDescription();
  }, [movieId]);

return(
    <>
{isLoading && <b>Loading payments...</b>}
{error && <b>HTTP error!</b>}
<div> jjjjjjjjj</div>
    </>
);

}