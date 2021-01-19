import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 768px) {
        width: 70%;
        flex-direction: row;
    }

    @media (min-width: 1080px) {
        width: 50%;
    }
`;

export const Input = styled.input`
    padding: .4em 1em;
    font-size: 1.2rem;
    width: 100%;
    outline: none;
    margin-bottom: .5em;

    @media (min-width: 768px) {
        margin: 0;
    }
`;

export const Button = styled.button`
    border: 0;
    padding: 1em 2em;
    font-weight: 700;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    text-transform: uppercase;
    width: 100%;

    @media (min-width: 768px) {
        width: 30%; 
    }

    &:disabled {
        opacity: .5;
    }
`;