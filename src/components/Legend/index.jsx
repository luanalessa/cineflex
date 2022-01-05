import React, { useContext } from 'react'
import { MovieContext } from '../../providers/MovieProvider';
import * as S from './styles';

export default function Subtitles(){

    return (
        <S.Wrapper>
            <S.Title>
                <S.Seat isSelected />
                Selecionado
            </S.Title>
            <S.Title>
                <S.Seat isAvailable />
                Disponivel
            </S.Title>            
            <S.Title>
                <S.Seat />
                Indisponivel
            </S.Title>


        </S.Wrapper>
        )
}