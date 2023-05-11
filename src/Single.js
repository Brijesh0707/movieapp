import { useEffect, useState } from 'react'
import React  from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {Api_Url} from './context'

const Single = () => {
    const {id} = useParams();
    const [isLoading,setisLoading]=useState(true)
    const [movie,setMovie]=useState("");
 
    const  getMovies = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setisLoading(false)
                setMovie(data);
            }

        }
        catch(err){
            console.log(err)
        }
    }


    useEffect(()=>{
      let timer=   setTimeout(()=>{
            getMovies(`${Api_Url}&i=${id}`);

        },1000);

        return ()=>clearTimeout(timer);
       
    },[id])

  return (
    <>
    <section id="section1">
    <div className='main2'>
      <div className='movie-menu'>
       <figure>
        <img src={movie.Poster}></img>
       </figure>

      </div>
      <div className='movie-detail'>
        <div className='detail'>
          <p className='title'>Movie Name - {movie.Title}</p>
          <br></br>
          <p className='detail1'>Movie Release Date - {movie.Released}</p>
          <p className='detail1'>{movie.Genre}</p>
          <p className='detail1'>{movie.imdbRating}</p>
          <p className='detail1'>{movie.Country}</p>
          <br></br>
          <NavLink to="/">
          <button id="btn4">GO BACK</button>
      
          </NavLink>
          
        </div>
      </div>
      </div>

    </section>
    </>
  )
}

export default Single;