import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const MovieContext = createContext({})

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [sessions, setSessions] = useState([])
    const [order, setOrder] = useState({ session: null, seats: null});

    useEffect(()=>{
      axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')
        .then(response => setMovies(response.data))
        .catch(err => console.error(err))
    },[])
  
    const getSessions = (movieId) => {
      axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`)
        .then(response => setSessions(response.data.days))
        .catch(err => console.error(err))
    };

  return (
    <MovieContext.Provider
      value={{ movies, sessions, getSessions}} >
      {children}
    </MovieContext.Provider>
  )
}
