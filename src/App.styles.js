import styled from "styled-components"


export const Message = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:2rem;
 

    h3{
        text-align: right;
        font-weight: 200;
    }
`

export const MessageContent = styled.footer`
    background-color : #710594;
    min-width:40%;
    padding:1.5rem;
    border-radius: 5px;
`
export const InputMessage = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin:3rem;

    input{
        padding:1rem;
        background-color: #150916;
        color:white;
        width:25%;
        margin:0.5rem;
    }

    button{
        background-color: #5e429f;
        padding:1.3rem;
        border-radius:5px;
        color:white;
        margin:0.5rem;
    }
`