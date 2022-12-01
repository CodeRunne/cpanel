import styled from 'styled-components';

export const DescriptionContainer = styled.section`
    height: auto;
    padding: 8rem 0;
`;

export const DescriptionHeader = styled.h2`
    margin-bottom: 2.5rem;

    @media (max-width: 600px) {
        margin-bottom: 1.8rem;
    }

    @media (max-width: 425px) {
        margin-bottom: 1.2rem;
    }
`;

export const DescriptionText = styled.p`
    width: 55%;
    text-align: center;

    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }

    @media (max-width: 1100px) {
        width: 65%;
    }

    @media (max-width: 900px) {
        width: 68%;
    }

    @media (max-width: 800px) {
        width: 75%;
    }

    @media (max-width: 425px) {
        width: 90%;
    }
`;