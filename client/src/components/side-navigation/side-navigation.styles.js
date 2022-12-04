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
		width: 35vw;
		height: 100vh;

		position: fixed;
		top: 0;
		z-index: 100;

		transition: left .4s ease;
	}

	@media (max-width: 600px) {
		width: 45%;
	}

	@media (max-width: 500px) {
		width: 55%;
	}

	@media (max-width: 425px) {
		width: 63%;
	}

	@media (max-width: 375px) {
		width: 70%;
	}

	@media (max-width: 320px) {
		width: 80%;
	}
`;

export const SideNavigationListItem = styled.ul`
	width: 80%;
	gap: .8rem;

	@media (max-width: 600px) {
		gap: 1rem;
	}
`;