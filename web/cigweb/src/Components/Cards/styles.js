import styled from 'styled-components';

export const Container = styled.div`
    width: 800px;
    height: 70px;
    background: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 5px;
`

export const LeftCard = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h3{
        padding: 10px;
        width: 200px;
    }

    img{
        margin-left: 20px;
        width:30px;
        height:30px;
        
    }

    &:hover {
        background: #C09F80;
    }
`

export const CenterCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #707070;

    p, span{
        padding: 10px;
    }
`


export const RightCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 20px;

    img{
        cursor: pointer;
        opacity: 75%;
        width:18px;
        height:22px;
    }

    img:hover{
        opacity: 100%;
    }
`
