import styled from 'styled-components';

export const SideNavigationContainer = styled.aside`
	grid-column: 1/4;
	grid-row: 1/-1;
	padding-top: 3rem;
	color: var(--white);

	position: sticky;
	top: 0;
	left: 0;

	@media (max-width: 600px) {
		width: 55vw;
		height: 100vh;

		position: fixed;
		top: 0;
		left: -40rem;
		z-index: 100;
	}
`;

export const SideNavigationListItem = styled.ul`
	width: 80%;
	gap: .8rem;
`;