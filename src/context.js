
import React, { useContext, useEffect, useState } from "react";

 export const Api_Url=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;



const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isLoading,setisLoading]=useState(true)
    const [movie,setMovie]=useState([]);
    const [isError,setisError]=useState({show:"false",msg:""});
    const [query,setQuery]=useState("avenger")

    const  getMovies = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setisLoading(false)
                setMovie(data.Search);
            }else{
                setisError({
                    show:true,
                    msg:data.error
                })

            }

        }
        catch(err){
            console.log(err)
        }
    }


    useEffect(()=>{
      let timer=   setTimeout(()=>{
            getMovies(`${Api_Url}&s=${query}`);

        },1000);

        return ()=>clearTimeout(timer);
       
    },[query])

    return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery }}>
        {children}
    </AppContext.Provider>
};

const Global = ()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,Global};

