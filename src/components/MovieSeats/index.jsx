import React, { useContext, useState,useEffect } from 'react'
import { MovieContext } from '../../providers/MovieProvider';


import * as S from './styles';

export default function MovieSeats() {
  const { order, selectSeats, seats } = useContext(MovieContext);
  const [isSelected, setIsSelected] = useState([]);

  console.log(seats)
  
  const addSeats = (id) => {
    selectSeats(id)
    setIsSelected([true])
  }
  return (
    <S.Container>
      <S.Title>Selecione o(s) assento(s)</S.Title>
      <S.Wrapper>
        {seats.map( seat =>
          <S.Seat 
          key= {seat.id}
          isAvailable={seat.isAvailable} 
          isSelected = {(order.seats).indexOf(seat.id) === -1 ? false : true} 
          onClick={() => seat.isAvailable ? addSeats(seat.id) : alert("Assento ocupado!")}
            >
              {seat.name}
            </S.Seat> 
        )}
      </S.Wrapper>
    </S.Container>
  )
}

