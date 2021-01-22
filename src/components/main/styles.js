import styled from "styled-components";
import {EXTRA_SMALL_WIDTH, SMALL_WIDTH, MEDIUM_WIDTH} from "../../utils/constants";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin: 1em auto;
    padding: 0 1em;
    color: #fff;
    animation: slideIn 2s ease;

    @keyframes slideIn {
        from {
            transform: translateX(-50px);
            opacity: 0;
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media (min-width: ${EXTRA_SMALL_WIDTH}px) {
        font-size: 2.5rem;
    }

    @media (min-width: ${SMALL_WIDTH}px) {
        font-size: 3rem;
        text-align: left;
        width: 70%;
    }

    @media (min-width: ${MEDIUM_WIDTH}px) {
        font-size: 3rem;
        text-align: left;
        width: 55%;
    }
`;