import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    `

export const Content = styled.div`
    margin: auto;
    width: 80%;
    
`
export const Bottom = styled.div`
    a{
        cursor: pointer;
        width: 180px;
        height: 45px;
        background: #76323F;
        color: #fff;
        font-size: 20px;
        text-decoration:none;

        display: flex;
        align-items: center;
        justify-content: space-around;
        margin:5px;
        margin-left: 10px;
    }

    img{
        width: 30px;
        height: 30px;
    }

    a:hover{
        opacity: 60%;
        transition: 0.2s;
    }
`
export const Title = styled.div`
    margin: auto;
    margin-bottom: 5px;
    width: 98%;
    height: 45px;

    display:flex;
    align-items: center;
    justify-content: space-around;

    span{
        color: #fff;
        font-size: 20px;
    }

    border-radius: 15px;
    background: #76323F;
`
export const Data = styled.div`
    margin: auto;
    width: 98%;


    border-radius: 15px;
    background: #fff;
`

