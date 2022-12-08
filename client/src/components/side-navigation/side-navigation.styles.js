import styled from 'styled-components';

export const SideNavigationContainer = styled.aside`
	grid-column: 1/4;
	grid-row: 1/-1;
	padding-top: 3rem;
	color: var(--white);

	position: sticky;
	top: 0;
	left: 0;

	@media (max-width: 768px) {
		width: 40vw;
		height: 100vh;

		position: fixed;
		top: 0;
		z-index: 2000;

		transition: left .4s ease;
	}

	@media (max-width: 600px) {
		width: 50%;
	}

	@media (max-width: 500px) {
		width: 60%;
	}

	@media (max-width: 425px) {
		width: 70%;
	}

	@media (max-width: 375px) {
		width: 80%;
	}

	@media (max-width: 320px) {
		width: 95%;
	}
`;

export const SideNavigationCloseButton = styled.span`
	position: absolute;
	top: 2%;
	right: 5%;
	font-size: 1.7rem;
	color: var(--white);
	display: none;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 768px) {
		display: block;
	}
`;

export const AccountFundsContainer = styled.div`
	padding-left: 3rem;
    margin-bottom: 3rem;
    align-self: flex-start;

    @media (min-width: 425px) {
    	display: none;
    }
`;

export const AccountFundsHeading = styled.div`
	color: var(--accent);
	font-size: 1.07rem;
	font-weight: 700;
	margin-bottom: .1rem;
`;

export const AccountFunds = styled.h4`
	font-size: 2.8rem;
    font-weight: 700;
`;

export const SideNavigationListItem = styled.ul`
	width: 80%;
	gap: .8rem;

	@media (max-width: 600px) {
		gap: 1rem;
	}
`;