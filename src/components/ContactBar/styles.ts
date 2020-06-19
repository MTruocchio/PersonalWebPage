import styled from "styled-components"

export const Container = styled.div`
    grid-area: CB;
    display: flex;
    padding:5px;
    flex-direction: column;
    align-items: center;
    background-color: var(--bgSecondary);
    max-width:70px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display:none;
    }
`
export const BoxIconContact = styled.div`
    margin-top:40px;
    display:flex;
    width:50px;
    height:50px;
    background-color: var(--bgPrimary);
    border-radius: 5px;
    align-items: center;
    justify-content:center;
   
`