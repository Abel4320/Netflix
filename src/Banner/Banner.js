import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../axios';
import requests from '../apirequest';
const base_url="https://image.tmdb.org/t/p/original"
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request?.data.results[Math.floor(Math.random() * request.data.results.length)
            ]
            );
            return request
        }
        fetchData();
    }, []);
    function truncate(str, n) {
        return  str?.length>n?str.substr(0,n-1)+"...":str
    }
    return (
            <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        }}
            >
                <div className='banner_contents'>
                    <div >
                    <h1 className='banner_title'>{movie.title||movie.name||movie.original_name}</h1>
                </div>
                <div>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>Mylist</button>
                </div>
                <h1 className='banner_desc'>{truncate(movie?.overview, 150)}</h1></div>
          <div className='fade_Bottom'></div>
              </header>
    )
}
export default Banner
