import styled from 'styled-components';

export const SessionFooter = styled.div`
    position: fixed;
    width: 100%;
    height: 117px;
    left: 0px;
    bottom: 0px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;

    padding: 0 10%;
`

export const MoviePoster = styled.figure`
    width: 64px;
    height: 89px;
    left: 10px;
    bottom: 14px;

    background-image: url(${props => props.poster});
    background-size: cover;
    border: 10px solid #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
`

export const MovieTitle = styled.span`
    width: auto;
    height: 40px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    margin-left: 20px;
    color: #293845;
`