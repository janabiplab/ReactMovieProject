import { useDispatch } from "react-redux";
import { fetchMovies } from "../Redux/movieSlice";
import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) dispatch(fetchMovies(query)); 
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movie..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;
