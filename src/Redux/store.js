import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"; // import movie reducer

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
