import { Link,useLocation } from "react-router-dom";
import css from "./MovieList.module.css";



export default function MovieList({ movies }) { 
  const location = useLocation(); 
  console.log(location);
  return ( 
      <ul className={css.items}> 
          { movies && movies.map((movie) => ( 
              <li 
              className={css.item}
               key={ movie.id}> 
                  <Link to={`/movies/${movie.id}`}
                      state= {location}  >
                      {movie.title}</Link> 
              </li> 
          ))} 
      </ul> 
  ); 
} 