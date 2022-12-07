import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthEnquiryText = styled.p`
	font-size: 1.12rem;
	margin-top: 1.5rem;
	text-align: center;

	@media (max-width: 1200px) {
		margin-top: 1.3rem;
	}

	@media (max-width: 900px) {
		font-size: 1.22rem;
		margin-top: 1rem;
	}

	@media (max-width: 425px) {
		font-size: 1.28rem;
	}
`;


export const AuthEnquiryLink = styled(Link)`
	font-size: 1.2rem;
	margin-left: .4rem;

	@media (max-width: 900px) {
		font-size: 1.23rem;
	}

	@media (max-width: 425px) {
		font-size: 1.3rem;
	}
`;
