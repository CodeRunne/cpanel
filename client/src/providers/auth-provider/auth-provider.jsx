import { useState, createContext } from 'react';

const AuthContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
	setIsLoading: () => {},
	isLoading: true,
	logoutUser: () => {},
	checkUserAuth: () => {},
	error: null
});


const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	function logoutUser() {
		setCurrentUser(null);
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