import React ,{useReducer}from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
 
 //use
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </Router>  
  
   
    </>
  )
}

export default App