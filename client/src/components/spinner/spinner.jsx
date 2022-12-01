import React from 'react';
import { SpinnerContainer, SpinnerItem } from './spinner.styles';

function Spinner() {
	return (
		<SpinnerContainer className="d-flex d-j-cnt d-a-cnt">
			<SpinnerItem></SpinnerItem>
			<SpinnerItem></SpinnerItem>
			<SpinnerItem></SpinnerItem>
			<SpinnerItem></SpinnerItem>
		</SpinnerContainer>
	)
}

export default Spinner