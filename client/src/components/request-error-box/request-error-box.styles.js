import styled from 'styled-components';

export const RequestErrorContainer = styled.div`
	width: 70%;
    margin: 0 auto;
    height: 5rem;
    background: var(--accent-tint-3);
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid var(--accent-tint-4);
    color: var(--accent);
    border-radius: 0.3rem;
    position: relative;

    svg {
    	font-size: 1.3rem;
    	position: absolute;
    	top: 50%;
    	right: 3%;
    	transform: translate(-50%, -50%);
    	justify-self: flex-end;
    
    	&:hover {
    		cursor: pointer;
    	}
    }

    @media (max-width: 1200px) {
    	font-size: 1.05rem;

    	svg {
    		font-size: 1.35rem;
    	}
    }

    @media (max-width: 1100px) {
		height: 5.5rem;
    }

    @media (max-width: 900px) {
    	width: 75%;
    	height: 5.2rem;
		font-size: 1.1rem;

		svg {
    		font-size: 1.4rem;
    	}
    }

    @media (max-width: 800px) {
    	height: 5.4rem;
    	font-size: 1.12rem;

    	svg {
    		font-size: 1.45rem;
    	}
    }

    @media (max-width: 500px) {
    	width: 85%;
    	height: 6rem;
    	font-size: 1.15rem;

    	svg {
    		font-size: 1.6rem;
    	}
    }

    @media (max-width: 425px) {
    	width: 90%;
    	height: 6.5rem;
    	font-size: 1.2rem;
    }

    @media (max-width: 375px) {
    	width: 100%;
    	height: 6.5rem;
    	font-size: 1.25rem;

    	svg {
    		font-size: 1.7rem;
    	}
    }

     @media (max-width: 320px) {
    	font-size: 1.23rem;

    	svg {
    		font-size: 1.6rem;
    	}
    }
`;