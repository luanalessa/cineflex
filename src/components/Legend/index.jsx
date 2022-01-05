import React  from 'react'
import * as S from './styles';

export default function Legend(){

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