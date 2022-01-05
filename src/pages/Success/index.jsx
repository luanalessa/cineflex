import React, { useContext } from 'react'
import { MovieContext } from '../../providers/MovieProvider';
import { useNavigate} from "react-router-dom";

import Header from '../../components/Header';
import * as S from './styles'

export default function Success() {
  const { order, success,newOrder } = useContext(MovieContext);
  const history = useNavigate()

  const backHome = () => {
    newOrder()
    console.log(success)
    history('/');
  }

  return (
    <>
      <Header />
      <S.Label>Pedido feito com sucesso!</S.Label>
      <S.Wrapper>
        <S.Title>Filme e sessão</S.Title>
        <S.Info>{order.movie.title}</S.Info>
        <S.Info>{order.session}</S.Info>
        <S.Title>Ingressos</S.Title>
        <S.Info>
          {(order.seats).map(seat => 
          <>Assento {seat}<br/></> 
          )}
        </S.Info>
        <S.Title>Comprador</S.Title>
        <S.Info>{order.buyer[0]}</S.Info>
        <S.Info>{order.buyer[1]}</S.Info>

        <S.Button
          onClick={backHome} 
          >Voltar pra Home</S.Button>
      </S.Wrapper>
    </>
  )
}

