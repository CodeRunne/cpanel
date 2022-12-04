import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerContainer, SpinnerItem } from './spinner.styles';

function Spinner({ style }) {
	return (
		<SpinnerContainer 
			className="d-flex d-j-cnt d-a-cnt"
			style={{ 
				height: '100vh',
				...style
			}}
		>
			<SpinnerItem></SpinnerItem>
			<SpinnerItem></SpinnerItem>
			<SpinnerItem></SpinnerItem>
			<SpinnerItem></SpinnerItem>
		</SpinnerContainer>
	)
}

Spinner.propTypes = {
	style: PropTypes.object
};

export default Spinner