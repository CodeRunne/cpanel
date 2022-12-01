import React from 'react';
import { SideNavigationLinkItem } from './side-navigation-link.styles';


function SideNavigationLink({ icon, name, url }) {
	return (
		<li>
			<SideNavigationLinkItem to={`${url}`} className="d-flex d-a-cnt" end>
				{icon}
				{name}
			</SideNavigationLinkItem>
		</li>
	)
}

export default SideNavigationLink;