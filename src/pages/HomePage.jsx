import { useEffect, useState } from "react"
import { getMovies } from "../components/api/movies-api";
import MovieList from "../components/MovieList.module.css/MovieList";

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
    console.log(getData());
     },[])
return(
    <div>
        <h1>Trending today</h1>
        {isLoading && <b>Loading payments...</b>}
        {error && <b>HTTP error!</b>}
        <MovieList items={items}/>
    </div>
)
}
