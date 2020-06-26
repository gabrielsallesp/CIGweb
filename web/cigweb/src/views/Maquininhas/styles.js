import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    `

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;

    a{
        text-decoration: none;
        color: black;
    }
    

    width: 100%;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
`

export const Adicionar = styled.div`
    a{
        cursor: pointer;
        width: 200px;
        height: 50px;
        background: #266428;
        color: #fff;
        text-decoration:none;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        margin-right:20px;
    }

    &:hover{
        opacity: 60%;
        transition: 0.2s;
    }
`

export const Voltar = styled.div`
    a{
        cursor: pointer;
        width: 150px;
        height: 50px;
        background: #740000;
        color: #fff;
        text-decoration:none;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }

    &:hover{
        opacity: 60%;
        transition: 0.2s;
    }

`

