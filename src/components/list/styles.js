import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 1em;
`;

export const Base = styled.ul`
    width: 70%;
    margin: 0 auto;
    list-style: none;
`;

export const Item = styled.li`
    background-color: ${({isCompleted}) => isCompleted ? "#99ff99" : "#e3e3e3"};
    padding: 1em;
    margin-bottom: .5em;
    cursor: pointer;
    text-decoration: ${({isCompleted}) => isCompleted ? "line-through" : "none"};

    transition: background-color .5s ease-in-out;
`;