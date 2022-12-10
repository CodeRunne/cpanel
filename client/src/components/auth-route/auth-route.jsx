import React, { useContext } from 'react';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { Navigate } from 'react-router-dom';

function AuthRoute({ children }) {
	const { currentUser } = useContext(AuthContext);
	const verifiedMail = currentUser?.verified_mail ?? true;
	const token = JSON.parse(sessionStorage.getItem('token'));

	if(currentUser || token) 
		return <Navigate to="/dashboard" replace />
	else if(!verifiedMail) 
		return <Navigate to="/confirm-mail" replace />
	else
		return children;
}

export default AuthRoute;