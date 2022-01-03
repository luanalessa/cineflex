import styled from 'styled-components';

export const Container =  styled.div`
    width: 80%;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
export const Days =  styled.span`
    width: 100%;
    height: 35px;


    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: #293845;

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

export const Time = styled.div`
    width: 83px;
    height: 43px;

    background: #E8833A;
    border-radius: 3px;

    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;

    color: #FFFFFF;

    cursor: pointer;
`