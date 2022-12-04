import React, { useContext } from 'react';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
	const { currentUser } = useContext(AuthContext);

	if(!currentUser)
		return <Navigate to="/login" replace />

	return children;
}

export default ProtectedRoute;