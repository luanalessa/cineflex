import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const MovieContext = createContext({})

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [seats, setSeats] = useState([]);
    const [order, setOrder] = useState({ movie: null, session: null, seats: []});

    useEffect(()=>{
      axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')
        .then(response => {setMovies(response.data)})
        .catch(err => console.error(err))
    },[])
  
    const getSessions = (movieId) => {
      axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`)
        .then(response => {
          setSessions(response.data.days)
          setOrder({...order, movie: response.data})
        })
        .catch(err => console.error(err))
    };

    const getSeats = (sessionId) => {
      axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`)
        .then(response => {
          setSeats(response.data.seats)
          setOrder({...order, session: `${response.data.name}  ${response.data.day.weekday}`})
          console.log(order)

        })
    }

    const selectSeats = (seatId, isSelected) => {
      let seat = order.seats;
      console.log(seat.indexOf(seatId))

      if(seat.indexOf(seatId) === -1){
        seat.push(seatId)
        
      }else{
        seat.splice(seat.indexOf(seatId),1)
      }

      order.seats = seat
      console.log(seatId, order.seats)
    }

    // const handleOrder = (key, value) => {
    //   if(key === 'session ') setOrder({...order, session : value})
    //   else if( key === 'movie') setOrder({...order, movie : value})
    //   else setOrder({...order, seats : value})
    // }

  return (
    <MovieContext.Provider
      value={{ order, movies, sessions, seats, getSessions, getSeats, selectSeats}} >
      {children}
    </MovieContext.Provider>
  )
}
