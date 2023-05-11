import React from 'react';
import { Global } from './context';
import "./App.css";
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie } = Global();
  return (
    <>
    <section className='main'>
    <div className='grid'>
      {movie.map((curMovie) => {
        const {imdbID , Title , Poster} = curMovie;
        
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className='menu-card'>
            <div className='menu-info'>
              <h2>{Title}</h2>
              <img src={Poster} alt={imdbID}></img>
            </div>
          </div>

          </NavLink>
        );
      })}
      </div>
      </section>
      
      
    </>
  );
};

export default Movies;
