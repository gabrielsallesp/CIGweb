import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
`

export const Content = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Left = styled.div`
    width: 100%;
    height: 500px;
`


export const Right = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img { 
        width: 650px;
        height:750px;
    }
    `

export const Nome = styled.div`
    background: #FFECDE;
    font-size: 20px;

    strong{
        padding-left: 20px;
    }

    width: 30%;
    height: 60px;
    display: flex;
    align-items: center;

`

export const Valor = styled.div`
    background: #76323F;
    font-size: 40px;
    color:#fff;
    
    h1{
        padding-left: 40px;
    }

    width: 600px;
    height: 280px;
    display: flex;
    align-items: center;

`

export const Insights = styled.div`
    cursor: pointer;
    background: #C09F80;
    width: 200px;
    height: 60px;
    
    img {
        width: 30px;
        height: 30px;
    }

    p {
        font-size: 20px;
        color: black;
        margin: 0 30px;
    }

    &:hover{
        background: #38B23C;
        transition: 0.2s;
    }
    
    display: flex;
    align-items: center;
    justify-items: flex-end;

    position: absolute;
    left: 450px;
    top: 500px;
`
