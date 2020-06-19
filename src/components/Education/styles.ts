import styled from "styled-components"

export const Container = styled.div`
    grid-area: ED;
    display: flex;
    flex-direction:row;
    padding:30px 5px;
    
    align-items: center;
    background-color: var(--bgPrimary);
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display:none;
    }
`

export const TextDescription = styled.div`
    font-family: 'Roboto Mono', monospace;
    padding:30px;
    height:98%;
    width:100%;
    border-radius:20px;
    background-color: var(--bgSecondary);
    color:#c0c7d1;
`