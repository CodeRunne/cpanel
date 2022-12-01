import styled from 'styled-components';

export const NoticeBoxContainer = styled.div`
	width: 100%;	
	height: 100%;
	padding: .5rem 1.7rem;
	overflow-y: auto;

	&::-webkit-scrollbar {
    	width: .25rem;
    }

    &::-webkit-scrollbar-track {
    	background: transparent;
    }

    &::-webkit-scrollbar-thumb {
    	background: var(--grey-tint-6);
    }

	ul {
		list-style: circle !important;
		padding-left: 1.5rem;

		li {
			font-size: 1.098rem;
			line-height: 1.5;

			&:not(:last-of-type) {
				margin-bottom: .7rem;
			}
		}
}
`;

export const NoticeBoxHeader = styled.h6`
	text-align: center;
	margin-bottom: 2rem;

	span {
		color: var(--accent);
	}
`;