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
    display: flex;
    width: 100%;
    padding: .5em;
    border: 1px solid #000;
`;

export const Data = styled.div`
    background-color: ${({isCompleted}) => isCompleted ? "#efe" : "#eee"};
    padding: 1em;    
    flex-grow: 1;
`;

export const Action = styled.div`
    background-color: #f00;
    color: #fff;
    padding: 1em;    
`;