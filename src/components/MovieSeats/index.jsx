import React, { useContext, useState } from 'react'
import { MovieContext } from '../../providers/MovieProvider';
import Seat from '../Seat';


import * as S from './styles';

export default function MovieSeats() {  
  return (
    <S.Container>
      <S.Title>Selecione o(s) assento(s)</S.Title>
      <S.Wrapper>
        <Seat/>
      </S.Wrapper>
    </S.Container>
  )
}

