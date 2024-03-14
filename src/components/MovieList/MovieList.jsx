import { Link } from "react-router-dom";
import css from "./MovieList.module.css";
export default function MovieList({ movies }) {
  
  return (
    <ul className={css.items}>
      { movies &&  movies.map (( movie) => (
        
        <li className={css.item}
         key={ movies.id}>
          
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}