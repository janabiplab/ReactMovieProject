# React + Vite+Redux

# Movie Find App

## Overview
FilmFetch is a React-based movie search application using the OMDb API to fetch movie data. This project demonstrates global state management with Redux Toolkit, pagination, and error handling for efficient API calls.
---
###   Features
<pre>

  Search Bar –      Users can search for movies by title. 
  Results Pagination –    Displays paginated movie results dynamically. 
  Movie Details Page –    Click a movie to view its poster, genre, plot, and rating. 
  Loading State –    Shows a loading indicator while fetching data. 
  Error Handling –    Displays errors for failed API calls or no results. 
  Styled Components –    Responsive UI with clean styling.
</pre>
---
### Clone the Repository
<pre>
  git clone https://github.com/janabiplab/ReactMovieProject
  cd ReactMovieProject
</pre>
---
### start the build command

<pre>
  npm run build
</pre>
---
### File Structure
<pre>
 FilmFetch
 ┣  src
 ┃ ┣  components
 ┃ ┃ ┣  Searchbar.jsx       → Handles movie search input
 ┃ ┃ ┣  MovieList.jsx       → Displays paginated movie results
 ┃ ┃ ┣  MovieDetails.jsx    → Shows movie details on click
 ┃ ┣  Redux
 ┃ ┃ ┣  store.js            → Configures Redux store
 ┃ ┃ ┣  movieSlice.js       → Handles global movie state & API calls
 ┃ ┣  App.jsx               → Main application component
 ┃ ┣  main.jsx           
 ┣  package.json            → Lists dependencies
 ┣  README.md               → Project documentation

</pre>









   
