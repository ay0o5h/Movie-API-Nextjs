import {useState,useEffect} from 'react'
import Image from 'next/image';
import Bitmap from '../public/image/Bitmap.png';
import axios from "axios";


const MostPopular =() => {

    const [mostPopular, setmostPopular] = useState([]);

 let mostPopularApi =async()=> {
    try {
    const URL = "https://api.themoviedb.org/3/movie/popular?api_key=3ac085816bc250f509f682c35d13a2cb";
        
        let movies = await axios.get(URL);
        setmostPopular(movies.data["results"]);
      } catch (err) {
        console.log(err.message);
      }
 }
  useEffect( ()=> {
    mostPopularApi()
  },[])
    return (
        <div className="cardPlace">
 
        <h2>Most Popular</h2>
      
      
         
         <ul class="cards">
         {mostPopular.map((movie) => (
            <li key={movie.id}>
            <a class="card">
              <img  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} class="card__image" alt="img1" />
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
export default MostPopular;