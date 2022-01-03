import React, { useContext } from 'react'
import { MovieContext } from '../../providers/MovieProvider';
import { Link } from "react-router-dom";


import * as S from './styles';

export default function MovieSession() {
  const { sessions } = useContext(MovieContext);
  console.log(sessions)
  
  return (
    <S.Container>
      <S.Title>Selecione o horário</S.Title>
      {
        sessions.map(session => 
             <>
                <S.Days>{session.weekday} - {session.date}</S.Days>
                {(session.showtimes).map(showtime => 
                  <S.Time>{showtime.name}</S.Time>
                )}
            </>
            
        )
      }
    </S.Container>
  )
}

