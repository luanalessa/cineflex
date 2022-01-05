import styled from 'styled-components';

export const Container =  styled.div`
    width: 80%;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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

export const Seat =  styled.div`
    width: 26px;
    height: 26px;
 
    background: ${ (props) => 
        props.isSelected ? "#8DD7CF" :   props.isAvailable ? "#C3CFD9" : "#FBE192"
    };
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;

    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #000000;

    cursor: pointer;
`

export const Wrapper =  styled.div`
    width: 330px;
    height: 150px;
 
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
`

