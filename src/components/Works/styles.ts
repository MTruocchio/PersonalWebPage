import styled from "styled-components"

export const Container = styled.div`
    grid-area: WK;
    display: flex;
    padding:30px;
    align-items: center;
    background-color: var(--bgPrimary);
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display:none;
    }
`

export const TextDescription = styled.div`
    font-family: 'Roboto Mono', monospace;
    text-align:justify;
    padding:30px;
    width:100vw;
    height:98%;
    border-radius:20px;
    background-color: var(--bgSecondary);
    color:#c0c7d1;
`