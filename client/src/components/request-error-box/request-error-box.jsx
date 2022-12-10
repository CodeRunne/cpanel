import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { RequestErrorContainer, RequestErrorText } from './request-error-box.styles';

function RequestErrorBox({ error, closeErrorBox, style }) {
	return (
		<RequestErrorContainer style={style}>
			<RequestErrorText>{error}</RequestErrorText>
			<AiOutlineClose onClick={closeErrorBox} />
		</RequestErrorContainer>
	)
}

RequestErrorBox.propTypes = {
	error: PropTypes.string
}

export default RequestErrorBox