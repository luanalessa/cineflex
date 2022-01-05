import React, { useContext, useState } from 'react'
import { useNavigate  } from "react-router-dom";
import { MovieContext } from '../../providers/MovieProvider';


import * as S from './styles';

export default function Form() {
  const { order, sendOrder} = useContext(MovieContext);
  const [name, setName] = useState();
  const [document, setDocument] = useState();
  const history = useNavigate();

  const handleSuccess = () => {
    if((order.seats).length === 0){
      alert("Nenhum assento selecionado!")
    }else{
      sendOrder(name, document)
      history('/sucesso');
    }
    
    console.log(order.seats)
  }

  return (
    <S.Container>
      <S.Label>Nome do comprador:</S.Label>
      <S.Input type="text" onChange={event => setName(event.target.value)}/>
      <S.Label >CPF do comprador:</S.Label>
      <S.Input type="number" onChange={event => setDocument(event.target.value)}/>

      <S.Button 
        onClick={handleSuccess}
        disabled={ (order.seats).length === 0 ? true : false}
        >Reservar assento(s)</S.Button>
    </S.Container>
  )
}

