import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Noto Sans', sans-serif;
        font-size: 16px;
    }

    body {
        min-height: 100vh;
        background-image: linear-gradient(to bottom, #a65eff, #a351ff, #a043ff, #9d32ff, #9b19ff);
    }
`;