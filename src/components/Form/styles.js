import styled from 'styled-components';

export const Container =  styled.div`
    width: 400px;
    margin: 50px auto;

    margin-bottom: 200px;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    justify-content: center;


`


export const Input =  styled.input`
    width: 327px;
  height: 52px;
  margin-bottom: 8px;
  padding: 0px 18px;
  border-radius: 4px;
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  font-size: 18px;

  &::placeholder {
    color: #AFAFAF;
    font-style: italic;
  }
`

export const Label = styled.label`
    width: 327px;
    height: 25px;
    left: 24px;
    top: 472px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;
`

export const Button = styled.div`

    width: 225px;
    height: 42px;

    margin-top: 30px;
    background: #E8833A;
    border-radius: 3px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #FFFFFF;

    [disabled]{
        background-color: #d3d3d3;
    }
`