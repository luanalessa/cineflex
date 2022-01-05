import styled from 'styled-components';


export const HeaderBar = styled.header`
    position: fixed;
    width: 100%;
    height: 67px;
    left: 0px;
    top: 0px;

    background: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;
    img{
        position: absolute;
        width: 25px;
        top: 20px;
        left: 10px;
        cursor: pointer;
    }

`

export const Title = styled.span`
    width: 375px;
    height: 67px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #E8833A;
`