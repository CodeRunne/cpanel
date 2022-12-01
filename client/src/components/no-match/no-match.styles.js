import styled from 'styled-components';

export const NoMatchContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    gap: .2rem;
    user-select: none;

    button {
	    font-size: 1.1rem;
	    font-weight: 500;
	    margin-top: 0.4rem;
    }
`;

export const NoMatchHighlighter = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
`;

export const NoMatchSubHeader = styled.h5`
    font-size: 1.18rem;
    font-weight: 400;
    margin-top: .5rem;
    color: var(--grey-tint-5);
`;