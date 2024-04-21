import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }


    body{
        background-color: ${({theme}) => theme.COLORS.WHITE};
        color: ${({theme}) => theme.COLORS.BLACK};
        -webkit-font-smoothing: antialiased;
        
    }

    body, button {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }
    label, input, h1, footer, textarea{
       font-family: 'Roboto', sans-serif;
    }

    h1 {
        font-size: 4.0rem;
        font-weight: 900;
    }

    h2 {
        font-size: 3.2rem;
        font-weight: 300;
        font-family: 'Roboto', sans-serif;
    }

    h3 {
        font-size: 2.4rem;
    }
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color:#ffffff00;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background:${({theme}) => theme.COLORS.GRADIENT_SCROLL};
    filter: opacity(0%); /* Define a opacidade do thumb */
    
  }
`;