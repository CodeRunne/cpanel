import styled from 'styled-components';

export const ModalContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(0,0,0,0.03);
	backdrop-filter: blur(2px);

	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 1000;
`;

export const ModalContentContainer = styled.div`
	width: 45vw;
    height: 50vh;
    padding: 1.4rem 0;
    background: var(--white);
    border: 1px solid var(--grey-tint-2);
    border-radius: 0.4rem;
    box-shadow: 1px 1.2px 0.5rem rgb(0, 0, 0, 0.03);
    position: relative;
    
    button {
    	position: absolute;
	    top: 7%;
	    right: 0%;
	    transform: translate(-50%, -50%);
    
	    svg { font-size: 1.35rem; }
    }
`;
