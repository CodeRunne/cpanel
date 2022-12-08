import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { RequestErrorContainer } from './request-error-box.styles';

function RequestErrorBox({ error, closeErrorBox, style }) {
	return (
		<RequestErrorContainer 
			className="d-flex d-j-cnt d-a-cnt"
			style={style}
		>
			{error}
			<AiOutlineClose onClick={closeErrorBox} />
		</RequestErrorContainer>
	)
}

RequestErrorBox.propTypes = {
	error: PropTypes.string
}

export default RequestErrorBox