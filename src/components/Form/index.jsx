import React, { useContext, useState } from 'react'
import { useNavigate  } from "react-router-dom";
import { MovieContext } from '../../providers/MovieProvider';
import { Link } from "react-router-dom";


import * as S from './styles';

export default function Form() {
  const {success, order, sendOrder} = useContext(MovieContext);
  const [name, setName] = useState();
  const [document, setDocument] = useState();
  const history = useNavigate();

  const handleSuccess = () => {
    sendOrder(name, document)
    console.log('aaaaaaaaaaaaaaaaaa')
    if(success) {
      history('/sucesso');
    }
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

