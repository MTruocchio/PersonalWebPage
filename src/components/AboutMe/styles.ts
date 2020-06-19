import styled from "styled-components"

export const Container = styled.div`
    grid-area: AM;
    display: flex;
    flex-direction:row;
    padding:30px;
    align-items: center;
    background-color: var(--bgPrimary);
    max-height:250px;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display:none;
    }
`

export const TextDescription = styled.div`
    font-family: 'Roboto Mono', monospace;
    display: flex;
    text-align:justify;
    padding:30px;
    margin-top:50px;
    margin-bottom:30px;
    width:100vw;
    height:150px;
    border-radius:20px;
    background-color: var(--bgSecondary);
    max-height:250px;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display:none;
    }
    color:#c0c7d1;
`