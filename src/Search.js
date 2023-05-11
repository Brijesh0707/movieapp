import React from 'react'
import { Global } from './context'
import './App.css';

const Search = () => {
  const {query,setQuery,isError}=Global();
  return (
    <>
      <div className='search'>
        <h3>SEARCH THE MOVIE</h3>
        <br></br>
        <form action='#' onSubmit={(e)=>e.preventDefault()}>
          <div>
            <input type='text' id="search1" placeholder='search here' 
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className='movie-error'>
          <p>{isError.show && isError.msg}</p>
        </div>
      </div>
    </>
  )
}

export default Search