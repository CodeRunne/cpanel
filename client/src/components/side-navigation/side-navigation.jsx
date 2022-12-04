import React from 'react';
import { navigationLinks } from '../../constants/dashboard';
import SideNavigationLink from '../side-navigation-link/side-navigation-link'; 
import { SideNavigationContainer, SideNavigationListItem } from './side-navigation.styles';

function SideNavigation({ isOpen }) {
	return (
		<SideNavigationContainer 
			className="gradient d-flex d-j-cnt"
			style={{ left: isOpen ? "-40rem" : "0" }}
		>
			{/* Side Navigation List Item */}
			<SideNavigationListItem className="d-flex d-flex-column">
				{navigationLinks.map(link => <SideNavigationLink key={link.name} {...link} />)}
			</SideNavigationListItem>
		</SideNavigationContainer>
	)
}

export default SideNavigation