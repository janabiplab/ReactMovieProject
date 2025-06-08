import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// 🔹 Fetch movies from OMDb API
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (query) => {
  const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_MOVIE_API}`);
  return response.data.Search || []; // Returns movie list or empty array
});


const movieSlice = createSlice({
  name: "movies",
  initialState: { list: [], status: "idle", error: null },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";  // Shows loading state
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;  // Stores movie list
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to fetch movies"; // Stores error message
      });
  },
});

export default movieSlice.reducer; // Exports reducer to use in the store
