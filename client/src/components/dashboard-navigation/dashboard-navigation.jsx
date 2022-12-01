import React from 'react';
import PropTypes from 'prop-types';
import { APP_NAME } from '../../config';
import FundsDisplayButton from '../funds-display-button/funds-display-button';
import Button from '../button/button';
import Hamburger from '../hamburger/hamburger';

import { DashboardNavigationContainer, DashboardNavigationLogo, DashboardNavigationRight } from './dashboard-navigation.styles';

function DashboardNavigation({ isOpen="", setIsOpen=f=>f }) {
	
	return (
		<DashboardNavigationContainer className="d-flex d-j-sbtw d-a-cnt">
			{/* Dashboard Navigation Logo */}
			<DashboardNavigationLogo className="gradient-text" to="/dashboard">{APP_NAME}</DashboardNavigationLogo>

			{/* Dashboard Navigation Right */}
			<DashboardNavigationRight className="d-flex d-a-cnt">
				{/* Funds Display Button */}
				<FundsDisplayButton />
				
				{/* Logout Button */}
				<Button style={{ padding: '.3rem .5rem' }}>Logout</Button>

				{/* Hamburger */}
				<Hamburger 
					isOpen={isOpen} 
					setIsOpen={setIsOpen}
				/>
			</DashboardNavigationRight>
		</DashboardNavigationContainer>
	)
}

DashboardNavigation.propTypes = {
	isOpen: PropTypes.string.isRequired,
	setIsOpen: PropTypes.func.isRequired
}

export default DashboardNavigation;