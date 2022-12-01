import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideNavigationLinkItem = styled(NavLink)`
	font-size: 1.12rem;
	font-family: corbel, sans-serif;
	padding: .4rem;
	text-transform: capitalize;
	color: rgba(255,255,255,.96);
	gap: 1.3rem;

	&[aria-current="page"] {
		background: var(--white-tint-9);
	    color: var(--primary);
	    padding: 0.8rem 0.3rem;
	    padding-left: 1.25rem;
	    margin: .2rem 0;
	    border-radius: 0.3rem;
	    gap: 0.8rem	
   	}

   	&[aria-current="page"] > svg {
   		color: var(--primary);
   	}

	svg {
		font-size: 1.07rem;
		color: var(--white-tint-9);
	}

	@media (max-width: 1200px) {
		font-size: 1.16rem;

		svg {
			font-size: 1.3rem;
		}
	}

	@media (max-width: 1024px) {
		font-size: 1.18rem;
	}

	@media (max-width: 900px) {
		font-size: 1.22rem;

		svg { font-size: 1.4rem; }
	}

	@media (max-width: 800px) {
		font-size: 1.23rem;
	}
`;