import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Single from "./Single";
import "./App.css";

const App = () => {
  return (
    <>
 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Single/>}/>
        
      </Routes>
    








    </>
  )
}

export default App