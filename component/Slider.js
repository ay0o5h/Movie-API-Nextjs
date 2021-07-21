import { useState, useEffect } from 'react'
import Image from 'next/image';
import mask from '../public/image/Mask.png';
import { Carousel } from 'antd';
import axios from "axios";
const Slider = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  let i = 0;
  let nowPlayingApi = async () => {
    try {
      const URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=3ac085816bc250f509f682c35d13a2cb"
      let movies = await axios.get(URL);
      setNowPlaying(movies.data["results"]);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    nowPlayingApi()
  }, [])
  return (
    <Carousel className="Carousel" autoplay dots={false}>
      {nowPlaying.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="cover" className="cover" />
          <div className="container">
            <div className="content">
              <h2>{movie.title}</h2>
              <span>{movie.release_date}</span>
              <p>Popularity: {movie.popularity}</p>
            </div>
            <h3 className="num" >{i = i + 1}/20</h3>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Slider;