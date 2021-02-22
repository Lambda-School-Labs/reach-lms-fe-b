import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Lato', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

    //Mobile devices
    @media(min-width: 320px) {

    } 

    //iPads, Tablets
    @media(min-width: 481px) {

    }

    //Small screens, laptops 
    @media(min-width: 769px) {

    }

    //Desktops, large screens
    @media(min-width: 1025px) {

    }

    //Extra large screens, TV
    @media(min-width: 1201px) {

    }
`;

export default GlobalStyle;