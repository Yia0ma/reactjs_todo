import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Base = styled.ul`
    list-style: none;
    width: 100%;
    padding: 1em;
    padding-top: 2em;

    @media (min-width: 768px) {
        width: 70%;
    }

    @media (min-width: 1080px) {
        width: 50%;
    }
`;

export const Item = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: .7em;
    background-color: ${({isCompleted}) => isCompleted ? "#ccffdd" : "rgba(255,255,255,.7)"};
    padding: 0 .7em;
    border-radius: 5px;
    cursor: pointer; 
`;

export const Data = styled.div`
    padding: 1em;    
    flex-grow: 1;
    font-weight: 700;
    text-decoration: ${({isCompleted}) => isCompleted ? "line-through" : "none"};
    text-overflow: ellipsis;
    width: 70%;
    overflow: hidden;
`;

export const Action = styled.div`
    background-color: #f00;
    color: #fff;
    padding: .3em .5em;
    font-weight: 700;
    border-radius: 5px;
`;