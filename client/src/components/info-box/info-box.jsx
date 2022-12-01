import React from 'react';
import { InfoBoxSection } from './info-box.styles';
 
function InfoBox({ children }) {
	return (
		<InfoBoxSection className="d-flex d-flex-column">
			{children}
		</InfoBoxSection>
	)
}

export default InfoBox