import styled from "styled-components";
import {COLOUR_2, COLOUR_3, COLOUR_5} from "../../utils/constants";

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
    width: 90%;
    box-shadow: -2px -2px 2px rgba(255, 255, 255, .3), 2px 2px 2px ${COLOUR_3};
    border-radius: 1em;
    margin-bottom: 1.3em;

    &:hover {
        box-shadow: inset -2px -2px 2px rgba(255, 255, 255, .3),inset 2px 2px 2px ${COLOUR_3};
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
    font-size: 1.1rem;
    color: ${COLOUR_5};
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
        color: #FFF;
    }
`;