import {useState,useEffect} from 'react'
import Image from 'next/image';
import Bitmap from '../public/image/Bitmap.png';
import axios from "axios";

const TopRated =  () => {

  const [topRated, setTopRated] = useState([]);

 let topRatedApi = async () => {
  try {
    const URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=3ac085816bc250f509f682c35d13a2cb";
    let movies = await axios.get(URL);
    setTopRated(movies.data["results"]);
  } catch (err) {
    console.log(err.message);
  }

 }
  
 useEffect(() => 
 topRatedApi(), 
 []);
  
    return (
        <div className="cardPlace">
 
        <h2>Top Rated</h2>
      
      
         
         <ul class="cards">
         {topRated.map((movie) => (
            <li key={movie.id}>
            <a className="card">
              <img  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card__image" alt="img1" />
              <div className="title">
                  <h3>{movie.title}</h3>
              </div>
              
                <div className="card__header">
                 
                <p className="card__description"> 
                {movie.overview}
                </p>
                 
   
                
              </div>
            </a>      
          </li>

         ))}
            
           
           </ul>
         </div>
    )
}
export default TopRated;