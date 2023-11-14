import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"
import axios from './axios'
import './Row.css'

const base_url='https://image.tmdb.org/t/p/original'
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailer] = useState("")
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      console.log(movies)
      return request;
    }
    fetchData()
  }, [fetchUrl])
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailer("")
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name).then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailer(urlParams.get("v"))
      }).catch((error) => console.log("error"))
    }
  }
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (<img onClick={() => handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${movie.poster_path}`} alt={movie.name} />))}
      </div>
      <div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}
export default Row
