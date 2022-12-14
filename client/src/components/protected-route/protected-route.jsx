import React, { useContext } from 'react';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
	const { currentUser } = useContext(AuthContext);
	const verifiedMail = currentUser?.verified_mail ?? false;
	const token = JSON.parse(sessionStorage.getItem('token'));

	if(!currentUser || !token)
		return <Navigate to="/login" replace />
	else if(!verifiedMail)
		return <Navigate to="/confirm-mail" replace />
	else
		return children;
}

export default ProtectedRoute;