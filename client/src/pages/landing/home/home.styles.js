import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ServicesContainer = styled.section`
	padding-bottom: 4rem;
	display: grid;
	grid-template-columns: repeat(4,minmax(23%, 1fr));
	gap: 1.5rem;

	@media (max-width: 900px) {
		padding-left: 1rem;
		padding-right: 1rem;
		grid-template-columns: repeat(2, 35%);
		justify-content: center;
		gap: 1.8rem;
	}

	@media (max-width: 768px) {
		padding-left: 0;
		padding-right: 0;
	}

	@media (max-width: 600px) {
		padding-left: 2rem;
		padding-right: 2rem;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.3rem;
		grid-row-gap: 2rem;
	}

	@media (max-width: 425px) {
		padding-left: .5rem;
		padding-right: .5rem;
		gap: .7rem;
		grid-row-gap: 1rem;
	}

	@media (max-width: 375px) {
		grid-template-columns: 1fr;
		padding-left: 5rem;
		padding-right: 5rem;
		grid-row-gap: 1.3rem;
	}

	@media (max-width: 320px) {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	@media (max-width: 320px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

export const ServicesSection = styled.section`
	padding: 5rem 0;
	gap: 2rem;

	@media (max-width: 425px) {
		padding: 5rem .5rem;
	}
`;

export const InfoContainer = styled.section`
	padding: 5rem .5rem;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;

	@media (max-width: 1100px) {
		grid-template-columns: 50%;
		justify-content: center;
	}

	@media (max-width: 900px) {
		grid-template-columns: 55%;
	}

	@media (max-width: 768px) {
		grid-template-columns: 60%;
	}

	@media (max-width: 600px) {
		grid-template-columns: 75%;
	}

	@media (max-width: 600px) {
		grid-template-columns: 90%;
	}

	@media (max-width: 375px) {
		grid-template-columns: 100%;
	}
`;

export const InfoListItem = styled.ul`
	margin-top: 1rem;
	width: max-content;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
    grid-row-gap: 1rem;

    @media (max-width: 600px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const InfoLink = styled(Link)`
	font-size: 1.1rem;

	@media (max-width: 900px) {
		font-size: 1.15rem;	
	}

	@media (max-width: 768px) {
		font-size: 1.17rem;	
	}

	@media (max-width: 600px) {
		font-size: 1.27rem;
	}

	@media (max-width: 375px) {
		font-size: 1.3rem;
	}
`;

export const AboutContact = styled.p`
	font-size: 1.11rem;
	font-weight: 500;
	position: relative;

	&:before {
		content: '';
	    position: absolute;
	    top: 105%;
	    left: .5%;
	    transform: translateY(-50%);
	    border-radius: 0.1rem;
	    width: 10%;
	    height: 0.18rem;
		background: linear-gradient(to top right, var(--primary-tint-7), var(--primary));
	}

	span {
		font-weight: 400;
		margin-left: .4rem;
	}
`;