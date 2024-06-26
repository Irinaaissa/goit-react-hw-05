import { useEffect, useState } from "react"
import { getMovies } from "../../api/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { CirclesWithBar } from "react-loader-spinner";
import css from "./HomePage.module.css";
export default function HomePage() {


    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
    async function getData(){
        try {
            setIsLoading(true);
            const data = await getMovies();
            setItems(data);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
          }
    }
    
    getData()
    
     },[])
     
return(
    <div>
        <h1>Trending today</h1>
        {isLoading && <b className={css.container }><CirclesWithBar color="#eb0a37"/></b>}
        {error && <b>HTTP error!</b>}
        <MovieList movies={items}
        
        />
    </div>
)
}
