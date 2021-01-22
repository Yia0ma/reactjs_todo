import styled from "styled-components";
import {COLOUR_5, EXTRA_SMALL_WIDTH, SMALL_WIDTH, MEDIUM_WIDTH, COLOUR_4} from "../../utils/constants";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
`;

export const Base = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    align-items: center;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    box-shadow: ${({isCompleted}) => isCompleted ? " inset -2px -2px 2px rgba(255, 255, 255, .1),inset 2px 2px 2px #000" : "-1px -1px 5px rgba(255, 255, 255, .3), 3px 3px 5px #000;"};
    border-radius: 1em;
    margin-bottom: 1.3em;
    cursor: pointer;
    animation: fadeIn 1s ease;

    &:hover {
        box-shadow: inset -2px -2px 2px rgba(255, 255, 255, .1),inset 2px 2px 2px #000;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
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

export const Data = styled.div`
    padding: 1em;    
    flex-grow: 1;
    font-weight: 700;
    text-decoration: ${({isCompleted}) => isCompleted ? "line-through" : "none"};
    text-overflow: ellipsis;
    width: 70%;
    overflow: hidden;
    font-size: .9rem;
    color: ${({isCompleted}) => isCompleted ? "#FFF" : COLOUR_5};
`;

export const Action = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .5em;
    font-size: 1.5rem;
    color: ${COLOUR_5};
    cursor: pointer;

    &:hover {
        color: ${COLOUR_4};
    }
`;