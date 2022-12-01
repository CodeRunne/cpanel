import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoticeNoteContainer = styled.div`
	margin-top: 2.5rem;
	gap: .7rem;
`;

export const NoticeNoteHeader = styled.h6`
	font-size: 1.2rem;
	color: var(--accent);
`;

export const NoticeNoteTextContainer = styled.div`
	gap: .7rem;
	padding-left: .4rem;
`;

export const NoticeNoteText = styled.p`
	font-size: 1.02rem;
	line-height: 1.5;
`;

export const NoticeNoteLink = styled(Link)`
	width: max-content;
	font-size: 1.05rem;
	font-weight: 600;
	margin-left: .5rem;
`;

