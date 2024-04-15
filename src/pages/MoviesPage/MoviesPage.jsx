import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { searchFilm, getImagePatch } from "../../api/movies-api";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);//
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [urlPatch, setUrlPatch] = useState("");
  
  // const [showBtn, setShowBtn] = useState(false);

  const handleSubmit = (inputQuery) => {
    setPages(1);
    setMovies([]);
    params.set("input", inputQuery);
    setParams(params);
  };

  const wordFilter = params.get("input") ?? "";

  useEffect(() => {
    const takeRequest = async () => {
      setIsLoading(true);
      try {
        const response = await searchFilm(wordFilter, pages);
        const imagePatch = await getImagePatch();
        const { base_url, backdrop_sizes } = imagePatch;
        const imageUrl = `${base_url}${backdrop_sizes[0]}`;
        setUrlPatch(imageUrl);

        setMovies((prevMovie) => [...prevMovie, ...response]);
        // setShowBtn(
          // response.total_pages !== pages && response.results.length > 0
        // );
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    takeRequest();
  }, [pages, wordFilter]);

  return (
    <div>
      <SearchForm request={handleSubmit} />
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP error!</b>}
      <MovieList movies={movies} urlPatch={urlPatch} />

    </div>
  );
}
