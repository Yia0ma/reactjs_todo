import styled from "styled-components";
import {COLOUR_4, COLOUR_5} from "../../utils/constants";

export const Container = styled.div`
    display: flex;
    padding: 1em;
`;

export const Logo = styled.div`
    display: flex;
    width: 1.7em;
    height: 1.7em;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${COLOUR_4};
    box-shadow: 1px 1px 3px ${COLOUR_5};
    border-radius: 50%;
`;