import {createGlobalStyle} from "styled-components";
import {COLOUR_1, COLOUR_3} from "./utils/constants";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Courgette', cursive;
        font-size: 16px;
    }

    body {
        min-height: 100vh;
        background: linear-gradient(${COLOUR_1}, ${COLOUR_3});
    }
`;