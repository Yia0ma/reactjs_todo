import styled from "styled-components";
import {COLOUR_3, COLOUR_4, COLOUR_5, EXTRA_SMALL_WIDTH, MEDIUM_WIDTH, SMALL_WIDTH} from "../../utils/constants";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
`;

export const Base = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    box-shadow: inset -2px -2px 2px rgba(255, 255, 255, .1), inset 2px 2px 2px #000;
    padding: 1em;
    width: 100%;
    border-radius: 1em;
    animation: open 1s ease;
    overflow: hidden;

    @keyframes open {
        from {
            width: 10%
        }

        top {
            width: 100%
        }
    }

    @media (min-width: ${EXTRA_SMALL_WIDTH}px) {
        width: 90%;
    }

    @media (min-width: ${SMALL_WIDTH}px) {
        width: 70%;
    }

    @media (min-width: ${MEDIUM_WIDTH}px) {
        width: 50%;
    }

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
    color: ${COLOUR_4};
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