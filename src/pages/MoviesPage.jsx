// import { Link } from "react-router-dom";
// import MovieDetailsPage from "./MovieDetailsPag";

import { useSearchParams } from "react-router-dom";


export default function MoviesPage() {
    const [params, setParams]= useSearchParams();
const wordFilter = params.get("title") ?? "";

const changeWordFilter = (nowFilter) => {
params.set("title",nowFilter);
setParams(params);
console.log(params);
}
// const filteredMovies = params.filter.
    return(
    <div> 

        <input type = "text" 
        value={wordFilter} 
        onChange={(e) => changeWordFilter (e.target.value)}/>
        <button> Starch </button>
    </div>
    
    
    )
    }