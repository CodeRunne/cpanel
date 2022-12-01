import React from 'react';
import { IoLogoBitcoin } from 'react-icons/io5';
import Button from '../button/button';
import { FundsDisplayButtonWrapper } from './funds-display-button.styles';

function FundsDisplayButton() {
	const amount = 0;

	return (
		<FundsDisplayButtonWrapper>
			<Button>
				{amount}
				<IoLogoBitcoin />
			</Button>
		</FundsDisplayButtonWrapper>
	)
}

export default FundsDisplayButton;