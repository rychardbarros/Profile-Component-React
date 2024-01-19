import { createGlobalStyle, css } from "styled-components";

export const ResetStyles = createGlobalStyle`
    ${css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;    
        }

        body {
            background-color: rgb(66, 140, 209);
            display: grid;
            place-content: center;
            min-height: 100vh;
        }
    `    
    }
`
