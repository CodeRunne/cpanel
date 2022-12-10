import styled from 'styled-components';

export const FormWrapper = styled.form`
    width: 35vw;
    padding: 1.8rem 1.5rem;
    border-radius: .3rem;
    margin: 0 auto;
    margin-top: 3rem;

    display: grid;
    grid-row-gap: 1rem; 

    @media (max-width: 1200px) {
        width: 40vw;
        grid-row-gap: 1.2rem;
        padding-bottom: 3rem;
    }

    @media (max-width: 1100px) {
        width: 45vw;
    }

    @media (max-width: 900px) {
        width: 53vw;
        padding-bottom: 4rem;
    }

    @media (max-width: 800px) {
        width: 60vw;
    }

    @media (max-width: 768px) {
        width: 65vw;
    }

    @media (max-width: 600px) {
        width: 78vw;
    }

    @media (max-width: 500px) {
        width: 87vw;
        padding: 0;
        padding-bottom: 3rem;
    }

    @media (max-width: 375px) {
        width: 91vw;
        padding-bottom: 3.5rem;
    }

    @media (max-width: 320px) {
        width: 93vw;
    }
`;

export const FormHeading = styled.div`
    margin-bottom: 1.2rem;
    gap: .95rem;

    @media (max-width: 900px) {
        gap: 1rem;
    }

    @media (max-width: 425px) {
        gap: 1.12rem;
    }
`;

export const FormHeadingMainText = styled.h3`
    font-size: 2.2rem;
    font-weight: bold;

    @media (max-width: 1024px) {
        font-size: 2.1rem;
    }

    @media (max-width: 425px) {
        font-size: 2.15rem;
    }

    @media (max-width: 375px) {
        font-size: 2rem;
    }
`;

export const FormHeadingSubText = styled.p`
    font-size: 1.15rem;
    color: var(--grey-tint-6);

    @media (max-width: 1024px) {
        font-size: 1.13rem;
    }

    @media (max-width: 768px) {
        font-size: 1.14rem;
    }

    @media (max-width: 425px) {
        font-size: 1.23rem;
    }
`;