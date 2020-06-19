import styled from "styled-components"

export const Container = styled.div`
    grid-area: SL;
    display: flex;
    padding:5px;
    flex-direction: row;
    align-items: center;
    background-color: var(--bgSecondary);
    max-height:70px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display:none;
    }
`
export const BoxIconContact = styled.div`
    display:flex;
    width:50px;
    height:50px;
    background-color: var(--bgPrimary);
    border-radius: 5px;
    align-items: center;
    justify-content:center;
   
`