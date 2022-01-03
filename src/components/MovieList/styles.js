import styled from 'styled-components';

export const Container =  styled.div`
    width: 80%;

    display: flex;
    flex-wrap:  wrap;
    justify-content: center;
    align-content: center;
    gap: 15px;

    margin: 0 auto;
`
export const MovieCard =  styled.img`
    width: 145px;
    height: 209px;
    background-image: url(${props => props.poster});
    background-size: cover;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    border: 8px solid white;
    position: relative;

    cursor: pointer;

    :hover{
        transform: scale(1.1);
    }
`

export const Title = styled.span`
    width: 100%;
    height: 110px;

    margin: 0 auto;
    margin-top: 80px;

    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #293845;
`