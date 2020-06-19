import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
     *, button, input{
         border:0;
         outline:0;
         font-family:sans-serif;
     }

     html, body, #root{
        height:100%; 
        background-color: var(--bgPrimary)
     }
     h5{
        font-size:1em;
        font-weight:100
     }
     :root{
        --bgPrimary: #282A36;
        --bgText: #393d45;
        --bgSecondary: #212326;
        --skillBar: purple;
        --textSkill: #f84a4b;
        --textQualification: #6e86d6;
        --textFocus: #f9a839;
        --Title: #413f3f;

        
    --aBG       : #282A36;
    --FG        : #F8F8F2;
    --SELECTION : #44475A;
    --COMMENT   : #6272A4;
    --CYAN      : #8BE9FD;
    --GREEN     : #50FA7B;
    --ORANGE    : #FFB86C;
    --PINK      : #FF79C6;
    --PURPLE    : #BD93F9;
    --RED       : #FF5555;
    --YELLOW    : #F1FA8C;
    --COLOR0    : #21222C;
    --COLOR1    : #FF5555;
    --COLOR2    : #50FA7B;
    --COLOR3    : #F1FA8C;
    --COLOR4    : #BD93F9;
    --COLOR5    : #FF79C6;
    --COLOR6    : #8BE9FD;
    --COLOR7    : #F8F8F2;
    --COLOR8    : #6272A4;
    --COLOR9    : #FF6E6E;
    --COLOR10   : #69FF94;
    --COLOR11   : #FFFFA5;
    --COLOR12   : #D6ACFF;
    --COLOR13   : #FF92DF;
    --COLOR14   : #A4FFFF;
    --COLOR15   : #FFFFFF;
     }

     .imgProfile{
        margin-left:30px;
        width:150px;
        border-radius:50%;
     }

     .fontGreen{
        color:var(--GREEN);
     }
     .fontPurple{
        color:var(--PURPLE);
     }
     .fontPink{
        color:var(--PINK);
     }
     .fontRed{
        color:var(--RED);
     }
     .fontYellow{
        color:var(--YELLOW);
     }
     .fontOrange{
        color:var(--ORANGE);
     }
     .fontCyan{
        color:var(--CYAN);
     }
` 
