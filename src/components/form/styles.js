import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 1em;
    justify-content: center;
`;

export const Base = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Input = styled.input`
    padding: .4em 1em;
    font-size: 1.2rem;
`;

export const Button = styled.button`
    border: 0;
    padding: 1em 2em;
    font-weight: 700;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    text-transform: uppercase;
`;