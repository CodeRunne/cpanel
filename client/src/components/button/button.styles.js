import styled from 'styled-components';

export const ButtonElement = styled.button`
    width: max-content;
    border: 0;
    font-family: inherit;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    padding: 1rem 0.2rem;
    
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 0.3rem;

    transition: all .4s ease; 

    svg {
        font-size: 1.23rem;
    }

    &:hover,
    &:focus {
        outline: 0;
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        font-size: 1.18rem;
    }

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media (max-width: 425px) {
        font-size: 1.34rem;
    }

    @media (max-width: 375px) {
        font-size: 1.37rem;
    }
`;