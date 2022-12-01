import React from 'react';
import ProfileInfoBox from '../profile-info-box/profile-info-box';
import { profileInfo } from '../../constants/dashboard';
import { ProfileContainer } from './profile.styles';

function Profile({ style }) {
	return (
		<ProfileContainer 
			className="d-grid"
			style={style}
		>
			{profileInfo.map(profile => <ProfileInfoBox key={profile.title} {...profile} />)}
		</ProfileContainer>
	)
}

export default Profile;