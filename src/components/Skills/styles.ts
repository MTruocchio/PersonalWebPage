import styled from "styled-components"

export const Container = styled.div`
    grid-area: SK;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--bgPrimary);
    max-height:150px;
    padding-left:15px;
    overflow-x: scroll;
    overflow-y:hidden;

    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: var(--bgSecondary); 
    }
`