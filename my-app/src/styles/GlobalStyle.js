import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #007bff;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: var(--background-color);
    }
`;

export default GlobalStyle;