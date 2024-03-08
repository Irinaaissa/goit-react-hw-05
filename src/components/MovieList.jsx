import { Link } from "react-router-dom";

export default function MovieList({ items }) {
  return (
    <ul>
      {items && Array.isArray(items) && items.map((item) => (
        
        <li key={item.id}>
          
          <Link to={`/movies/${item.id}`}>Details</Link>
        </li>
      ))}
    </ul>
  );
}