import styled from 'styled-components';

export const AlertContainer = styled.blockquote`
	width: 100%;
	height: 5.5rem;
	padding: 1rem 1.2rem;
    background: var(--tertiary-tint-1);
    font-size: 1.1rem;
    line-height: 1.5;
    gap: .5rem;

    position: relative;

	& button {
		position: absolute;
	    top: 50%;
	    right: 3%;
	    transform: translate(-50%, -50%);

	    font-size: 1.6rem;
    	font-weight: bold;
	}

	@media (max-width: 1200px) {
		font-size: 1.2rem;
	}


	@media (max-width: 600px) {
		button {
			right: 0;
			font-size: 1.4rem;
		}
	}

	@media (max-width: 425px) {
		button {
			right: 1.5%;
		    font-size: 1.6rem;
		    top: 45%;
		}
	}

	@media (max-width: 375px) {
		button {
			right: 50%;
		    font-size: 1.5rem;
		    top: 68%;
		}
	}

	@media (max-width: 320px) {
		button {	
		    right: 25%;
		    font-size: 1.5rem;
		    top: 68%;
		}
	}

	@media (max-width: 300px) {
		button {
			right: 1%;
		    font-size: 1.6rem;
		    top: 50%;
		}
	}
`;