import styled from "styled-components";
import {COLOUR_4} from "../../utils/constants";

export const Container = styled.div`
    display: flex;
    padding: 1em;
`;

export const Logo = styled.div`
    display: flex;
    width: 2em;
    height: 2em;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${COLOUR_4};
    box-shadow: 2px 2px 3px #000;
    border-radius: 50%;
`;