import styled from "styled-components"

export const Grid  = styled.div`
    display: grid;
    grid-template-columns: 70px 250px auto;
    grid-template-rows: 250px 150px auto 70px;

    /*
    CB - Contact Bar
    PP - Personal Profile
    AM - About Me
    SK - Skills
    WK - Works
    ED - Education
    SL - Slider Time Line
    
    */
    grid-template-areas:
        'CB PP AM'
        'CB SK SK'
        'CB ED WK' 
        'CB SL SL';    
    ;
    height: 100Vh
    
`