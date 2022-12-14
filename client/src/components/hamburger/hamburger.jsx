import React from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import Button from '../button/button';
import { HamburgerContainer } from './hamburger.styles';

function Hamburger({ isOpen = true, setIsOpen=f=>f }) {
	function toggleState() {
		if(isOpen)
			setIsOpen(!isOpen);
		else
			setIsOpen();
	}

	return (
		<HamburgerContainer className="hamburger">
			<Button onClick={() => toggleState()}>
				<FaBars />
			</Button>
		</HamburgerContainer>
	)
}

Hamburger.propTypes = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func.isRequired
}

export default Hamburger;