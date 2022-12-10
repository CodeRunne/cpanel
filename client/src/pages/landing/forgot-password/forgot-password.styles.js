import styled from 'styled-components';

export const ForgotPasswordContainer = styled.main`
	width: 35vw;
	padding: 1.8rem 1.5rem;
	margin: 0 auto;
	margin-top: 5rem;

	.form-container {
		width: 100% !important;
		padding: 0 !important;
		margin-top: 2rem !important;
	}

	@media (max-width: 1200px) {
		width: 45vw;

    	label {
    		font-size: 1.2rem !important;
    	}
    }

    @media (max-width: 1024px) {
		width: 49vw;
    }

    @media (max-width: 900px) {
		width: 55vw;
    }

    @media (max-width: 768px) {
		width: 62vw;
    }

    @media (max-width: 600px) {
		width: 80vw;
    }

    @media (max-width: 500px) {
		width: 90vw;
    }

    @media (max-width: 425px) {
		width: 95vw;
    }

    @media (max-width: 375px) {
		width: 98vw;
		padding: 1.8rem 1rem;

		label {
			font-size: 1.24rem !important;
		}
    }

    @media (max-width: 300px) {
		width: 98vw;
    }
`;

export const ForgotPasswordHeader = styled.header`
    margin-bottom: .7rem;
`;

export const ForgotPasswordHeaderText = styled.h4`
    font-size: 1.3rem;
    margin-bottom: 0.5rem;

    @media (max-width: 1200px) {
        font-size: 1.5rem;
        margin-bottom: .8rem;
    }

    @media (max-width: 900px) {
        font-size: 1.7rem;
    }

    @media (max-width: 425px) {
        margin-bottom: 1.1rem;
    }
`;

export const ForgotPasswordSubHeader = styled.p`
    font-size: 1.05rem;
    line-height: 1.5;
    color: var(--grey-tint-6);

    @media (max-width: 1200px) {
        font-size: 1.12rem;
        line-height: 1.55;
    }

    @media (max-width: 900px) {
        font-size: 1.2rem;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        line-height: 1.7;
    }

    @media (max-width: 500px) {
        font-size: 1.16rem;
    }

    @media (max-width: 425px) {
        font-size: 1.2rem;
    }

    @media (max-width: 375px) {
        font-size: 1.26rem;
    }

    @media (max-width: 300px) {
        font-size: 1.2rem;
    }
`;