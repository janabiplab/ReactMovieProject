import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import styled from "styled-components"
import { useEffect, useState,useRef } from "react";


const MovieList = () => {
  const { list, status, error } = useSelector((state) => state.movies);

  const [currentPage,setCurrentPage]=useState(1)
  const TotalPages=useRef(1)
  const perPageMovie=8
  TotalPages.current = Math.ceil(list.length / perPageMovie);

  const handlePageChange=(newPage)=>{
      if (newPage>=1 && newPage<=TotalPages.current){
        setCurrentPage(newPage)
      }
  }

  
  const lastMovieIndex=currentPage*perPageMovie
  const firstMovieIndex=lastMovieIndex-perPageMovie
  const currentPageMovie=list.slice(firstMovieIndex,lastMovieIndex)

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <MovieContainer>
        <p style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',color:'red'}}> FilmFetch</p>
        <SearchBox>
            <SearchInnerBox>
                <p>Search Movie By Title</p>
                <Searchbar/>
            </SearchInnerBox>
        </SearchBox>
        <ImageBox>
            <img src="/download.jpeg"/>
        </ImageBox>
      
      <div>
      {currentPageMovie.map((movie) => (
        
            
            
            <MovieDiv key={movie.imdbID}>
            <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`} style={{textDecoration:'none'}}>
            <MovieInnerDiv>
                <MovieImage>
                        <img src={movie.Poster} alt={movie.Title} />
        
                </MovieImage>
                <MovieDetails>
                       <div>
                        <p>{movie.Title} </p>
                         <h4>Published Year ({movie.Year})</h4>
                       </div>
                </MovieDetails>
            </MovieInnerDiv>
            </Link> 
          </MovieDiv>      
      ))}
      <div style={{display:"flex" ,alignItems:'center',justifyContent:'center'}}>
        <div style={{display:"flex" ,marginTop:'20px',marginBottom:'20px'}}>
            <button  onClick={()=>handlePageChange(currentPage-1) } disabled={currentPage==1}>previous</button> &nbsp;&nbsp;&nbsp;
            <small>page:{currentPage}</small>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage===TotalPages.current}>next</button>
        </div>
      </div>

      </div>   
      <div style={{height:"50px"}}></div>
    </MovieContainer>
  );
};

export default MovieList;
const MovieDetails=styled.div`
flex:2;

 display:flex;
  align-items:center;
  justify-content:center;
  p{
    font-size:22px;
    font-weight:bolder;
    color:red;
  }
    
`
const MovieImage=styled.div`

flex:2;
 display:flex;
  align-items:center;
  justify-content:center;
  img{
    width:250px;
    height:300px;
    border-radius:center;
  }
`
const MovieInnerDiv=styled.div`
  width:600px;
  height:400px;
  display:flex;
  background-image:linear-gradient(45deg,white,lightblue);
  border:1px solid gray;
  border-radius:5px;
    
`
const MovieDiv=styled.div`
  width:100%;
  min-height:400px;

  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  margin-top:10px;
`
const ImageBox=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:30px;
  img{
    width:370px;
    height:200px;
    border-radius:4px;
  }
`
const SearchInnerBox=styled.div`
  width:350px;
  height:100%;
  background-image:linear-gradient(45deg,#cc00ff,lightblue);
  border-radius:5px;
 
`
const SearchBox=styled.div`
  width:100%;
  height:100px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align: center;
  overflow-y:auto;

  p{
    font-weight:bolder;
    color:#0040ff;
  }
`
const MovieContainer=styled.div`
    width:100%;
    height:100vh;
    padding-bottom:30px;
   

`