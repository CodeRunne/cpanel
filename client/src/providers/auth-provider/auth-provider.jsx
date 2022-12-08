import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import decryptData from '../../assets/_helpers/decrypt-data';
import { logoutAuthApi, authApi, encryptionKey } from '../../config';

const AuthContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
	setIsLoading: () => {},
	isLoading: false,
	logoutUser: () => {},
	checkUserAuth: () => {}
});


const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	
	useEffect(() => {		
		function authUser() {
			const user = sessionStorage.getItem("token") ? JSON.parse(sessionStorage.getItem("token")) : null; 
			const decryptedUser = user ? decryptData(user, encryptionKey) : null;
			const token = decryptedUser?.sessionID;

			// Check if token exists
			if(token) {
				axios.post(authApi(token))
					.then(({ data: {user}}) => {
						if(user) 
							setCurrentUser(user);
					})
			} else
				setCurrentUser(null);
		}

		authUser();
	}, [setCurrentUser, setIsLoading]);

	// Logout user
	function logoutUser() {
		axios.get(logoutAuthApi)
			.then(({ data: { status }}) => {
				if(status === "success") {
					// Delete session
					sessionStorage.removeItem('token');

					// Set current user to null
					setCurrentUser(null);
				}
			});
	}

	return (
		<AuthContext.Provider value={{
			currentUser,
			setCurrentUser,
			isLoading,
			setIsLoading,
			logoutUser
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthProvider };