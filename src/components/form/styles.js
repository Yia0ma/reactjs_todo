import styled from "styled-components";
import {COLOUR_1, COLOUR_3, COLOUR_5} from "../../utils/constants";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
`;

export const Base = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLOUR_1};
    box-shadow: inset -2px -2px 2px rgba(255, 255, 255, .3), inset 2px 2px 2px ${COLOUR_3};
    padding: 1em;
    width: 100%;
    border-radius: 1em;
`;

export const Input = styled.input`
    background: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #FFF;
    flex-grow: 1;

    &::placeholder {
        color: ${COLOUR_5};
    }
`;

export const Button = styled.button`
    display: flex;
    color: ${COLOUR_5};
    font-size: 1.5rem;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;

    &:hover {
        color: #FFF;
    }

    &:disabled {
        color: ${COLOUR_3};
        cursor: default;
    }
`;