import React, { useContext } from 'react'
import { MovieContext } from '../../providers/MovieProvider';
import { Link } from "react-router-dom";
import * as S from './styles';

export default function MovieSession() {
  const { sessions, getSeats } = useContext(MovieContext);
  
  return (
    <S.Container>
      <S.Title>Selecione o horário</S.Title>
      {sessions.map(session => 
        <>
          <S.Days>{session.weekday} - {session.date}</S.Days>
          {(session.showtimes).map(showtime => 
            <Link to={`/assentos/${showtime.id}`}>
              <S.Time onClick={() =>  getSeats(showtime.id)} >{showtime.name}</S.Time>
            </Link>
          )}
        </> 
      )}
    </S.Container>
  )
}

