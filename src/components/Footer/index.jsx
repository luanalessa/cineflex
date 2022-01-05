import React, { useContext } from 'react'
import { MovieContext } from '../../providers/MovieProvider';
import * as S from './styles';

export default function Footer(){
    const { order } = useContext(MovieContext);

    return (
        <S.SessionFooter>
        <S.MoviePoster poster={order.movie.posterURL}/>
        <S.MovieTitle>
            {order.movie.title}
            <br/>
            {order.session ? order.session : null}    
        </S.MovieTitle>         
        </S.SessionFooter>)
}