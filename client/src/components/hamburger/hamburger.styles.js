import styled from 'styled-components';

export const HamburgerContainer = styled.div`
	button {
		svg {
			font-size: 1.8rem;
			color: var(--grey);
		}

		@media (max-width: 768px) {
			svg {
				font-size: 1.9rem;
			}
		}

		@media (max-width: 600px) {
			svg {
				font-size: 1.8rem;
			}
		}

		@media (max-width: 425px) {
			svg {
				font-size: 1.6rem;
			}
		}
	}
`;