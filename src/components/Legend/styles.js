import styled from 'styled-components';


export const Wrapper =  styled.div`
    width: 250px;
    height: 80px;
 
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
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



export const Title = styled.div`
    width: 70px;
    height: 28px;
    left: 56px;
    top: 403px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;

    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;

`