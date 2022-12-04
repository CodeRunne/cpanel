import React, { useContext } from 'react';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { Navigate } from 'react-router-dom';

function AuthRoute({ children }) {
	const { currentUser } = useContext(AuthContext);
	const { verified_mail } = currentUser;

	if(!verified_mail)
		return <Navigate to="/confirm-mail" replace />

	return children;
}

export default AuthRoute;