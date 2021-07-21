
import {useState,useEffect} from 'react'
import Image from 'next/image';
import Bitmap from '../public/image/Bitmap.png';
import axios from "axios";


const Upcoming =() => {

    const [upcoming, setupcoming] = useState([]);

 let upcomingApi =async()=> {
    try {
    const URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=3ac085816bc250f509f682c35d13a2cb";

     
        let movies = await axios.get(URL);
        setupcoming(movies.data["results"]);
      } catch (err) {
        console.log(err.message);
      }
 }
  useEffect( ()=> {
    upcomingApi()
  },[])
    return (
        <div className="cardPlace">
 
        <h2>Upcoming</h2>
      
      
         
         <ul class="cards">
         {upcoming.map((movie) => (
            <li key={movie.id}>
            <a class="card">
              <img  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}class="card__image" alt="img1" />
              <div class="title">
                  <h3>{movie.title}</h3>
              </div>
              
                <div class="card__header">
                 
                <p class="card__description"> 
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
export default Upcoming;