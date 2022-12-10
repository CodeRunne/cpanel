import React, { useContext } from 'react';
import { IoPerson, IoReorderTwo, IoJournal, IoLogoBitcoin } from 'react-icons/io5';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import ProfileInfoBox from '../profile-info-box/profile-info-box';
import { profileInfo } from '../../constants/dashboard';
import { ProfileContainer } from './profile.styles';

function Profile({ style }) {
	const { currentUser } = useContext(AuthContext);
	const { username, orders_amount, funds } = currentUser; 
	const { accountBalance, balanceSpent } = funds;

	return (
		<ProfileContainer 
			className="d-grid"
			style={style}
		>
			<ProfileInfoBox 
				icon={<IoPerson />}
				title={username}
				content="welcome to our panel"
			/>

			<ProfileInfoBox 
				icon={<IoLogoBitcoin />}
				title={balanceSpent === 0 ? "$0.00" : `$${balanceSpent}`}
				content="Balance spent"
			/>

			<ProfileInfoBox 
				icon={<IoReorderTwo />}
				title={orders_amount === 0 ? "$0.00" : `$${orders_amount}`}
				content="panel orders"
			/>

			<ProfileInfoBox 
				icon={<IoPerson />}
				title="Account balance"
				content={`$${accountBalance}`}
			/>
		</ProfileContainer>
	)
}

export default Profile;