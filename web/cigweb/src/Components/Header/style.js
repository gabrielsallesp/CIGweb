import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #D7CEC7;
    border-bottom: 5px solid #565656;

    display: flex;

`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    img{
        width: 100px;
        height: 60px;
    }

`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        font-family: Arial, Helvetica, sans-serif;
        color: #000;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #76323F; 
        }
    }

    .dividir::after{
        content: "|";
        margin: 0 10px;
        opacity: 50%;
    }

    #usuario {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        align-items:center;

        img {
            width: 50px;
            height:50px;
        }

        span {
            padding-right: 10px;
        }
    }
`