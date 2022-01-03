import React, { useContext } from 'react'
import { MovieContext } from '../../providers/MovieProvider';
import { Link } from "react-router-dom";


import * as S from './styles';

export default function MovieList() {
  const { movies, getSessions } = useContext(MovieContext);

  return (
    <S.Container>
      <S.Title>Selecione o filme</S.Title>
      { movies.map(movie => 
            <Link to={`/sessoes/${movie.id}`} key={movie.id}>
              <S.MovieCard onClick={() => getSessions(movie.id) } key={movie.id} poster={movie.posterURL}/>
            </Link>

            ) }
    </S.Container>
  )
}

