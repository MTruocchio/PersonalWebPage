import styled from "styled-components"

export const Container = styled.div`
    grid-area: PP;
    display: flex;
    align-items: center;
    background-color: var(--bgPrimary);
    max-height:250px;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display:none;
    }

`