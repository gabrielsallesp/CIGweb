import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    `

export const Form = styled.div`
    background: #76323F;
    width: 40%;
    height: 500px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;


    h2 {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        color: #fff;
    }

`

export const Input = styled.div`
    width: 100%;
    
    input{
        align-self: center;
        width: 100%;
        font-size: 25px;
        border:none;
        border-radius: 7px;
    }

    span{
        align-self: flex-start;
        margin-bottom:10px;
        font-size: 20px;
        color: #fff;
    }
    
`
export const Formulario = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

`
export const Bottom = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 70px;
`

export const Adicionar = styled.div`
    button{
        cursor: pointer;
        width: 150px;
        height: 50px;
        background: #266428;
        color: #fff;
        font-size:16px;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border:none;
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
        font-size:15px;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        text-decoration:none;
        margin-left: 20px;
    }

    &:hover{
        opacity: 60%;
        transition: 0.2s;
    }

`
