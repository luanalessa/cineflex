import React, {useContext} from 'react';
import { useNavigate , useLocation  } from "react-router-dom";
import { MovieContext } from '../../providers/MovieProvider';


import * as S from './styles';

import Back from '../../assets/back.svg'

export default function Header() {
  const {order, setOrder} = useContext(MovieContext);
  const location = useLocation();
  const history = useNavigate();
  
  const lastLocation = () => {
    history(-1);
    if(location.pathname.includes('assentos')){
      setOrder({...order, session : null, seats : []})
    }else{
      setOrder({movie: null, session : null, seats : []})
    }
  }
 
  return (
  
    <S.HeaderBar>
      { location.pathname !== '/' ? 
          <img src={Back} alt=""  onClick={() => lastLocation()} />
        : null
    }
      
      <S.Title>CINEFLEX</S.Title>


    </S.HeaderBar>


  )
}

