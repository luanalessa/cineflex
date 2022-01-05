import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const MovieContext = createContext({})

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [seats, setSeats] = useState([]);
    const [order, setOrder] = useState({ movie: null, session: null, seats: []});
    const [success, setSuccess] = useState(false);


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

        })
    }

    const selectSeats = (seatId, isSelected) => {
      let seat = order.seats;

      if(seat.indexOf(seatId) === -1){
        seat.push(seatId)
        
      }else{
        seat.splice(seat.indexOf(seatId),1)
      }

      return seat
    }

    const sendOrder = (userName, userDocument) => {
      if(order.seats.length > 0){
        const userOrder = { ids : order.seats, name : userName, cpf: userDocument}
        order.buyer = [userName, userDocument];
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", userOrder)
          .then( response => setSuccess(true))
          .catch( e =>  setSuccess(false))
      }
    }

    const newOrder = () => {
      setSuccess(false);
      setOrder({ movie: null, session: null, seats: []})
      console.log(success)

    }

  return (
    <MovieContext.Provider
      value={{ 
        success, 
        setSuccess, 
        order, 
        movies, 
        sessions, 
        seats, 
        getSessions, 
        getSeats, 
        selectSeats, 
        setOrder, 
        sendOrder,
        newOrder}} 
        >
      {children}
    </MovieContext.Provider>
  )
}
