import React, { useState, useEffect } from 'react';
import EmailValidation from '../../../validation/email.validation';
import { FormInput, Button } from '../../../components';
import { AccountFormsContainer, AccountForm, AccountFormHeader } from './account.styles';

function Account() {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState({});
	const [username, setUsername] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [currentPassword, setCurrentPassword] = useState("");
	const [currentPasswordError, setCurrentPasswordError] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [newPasswordError, setNewPasswordError] = useState("");
	const [confirmNewpassword, setConfirmNewPassword] = useState("");
	const [confirmNewpasswordError, setConfirmNewPasswordError] = useState("");
	const [apiKey, setApiKey] = useState("");
	const [apiKeyError, setApiKeyError] = useState("");
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);

	// Update Email
	function updateNewEmail(e) {
		e.preventDefault();

		setEmailError(EmailValidation({email}));

		setFormIsSubmitted(true);
	}

	// Update password form submit
	function updateUsername(e) {
		e.preventDefault();

		if(!username.length)
			setUsernameError("Username can't be empty");

		console.log(e.target.value);
	}

	// Update password form submit
	function updatePassword(e) {
		e.preventDefault();

		if(!currentPassword.length)
			setCurrentPasswordError("Please fill in your current password");

		// New Password validation
		if(!newPassword.length) 
			setNewPasswordError("Please fill in your new password");
		else if(newPassword === currentPassword) 
			setNewPasswordError("Can't use your current password");

		// Confirm password validation
		if(!confirmNewpassword.length) 
			setConfirmNewPasswordError("Please confirm your new password");
		else if(confirmNewpassword !== newPassword) 
			setConfirmNewPasswordError("Password doesn't match");
		else if(confirmNewpassword === currentPassword) 
			setConfirmNewPasswordError("Can't use your current password");
	}

	// Generate API KEY form
	function generateAPIKEY(e) {
		e.preventDefault();

		if(!apiKey.length) 
			setApiKeyError("Please add an api key");
		else {
			try {
				console.log("submit");
			} catch(e) {
				console.log(e)
			}
		}
		e.preventDefault();

		if(!apiKey.length) 
			apiKeyError("Add a valid api key");
		else if(apiKey.length < 10)
			apiKeyError("Api Key can'y be less than 10")
		else {
			try {
				console.log("api")
			} catch(e) {
				console.log(e);
			}
		}
	}

	useEffect(() => {
		if(Object.keys(emailError).length === 0 && formIsSubmitted) {
			console.log("email successfully updated");
		}
	}, [emailError, formIsSubmitted]);

	return (
		<>	
			<h5 className="heading-5" style={{ 
				fontWeight: '500', 
				textAlign: 'center'
			}}>Accounts</h5>

			{/* Account Forms Container */}
			<AccountFormsContainer className="d-grid">
				{/* Email Update Form */}
				<AccountForm 
					className="d-flex d-flex-column" 
					onSubmit={updateNewEmail}
					noValidate
				>
					{/* Account Form Header */}
					<AccountFormHeader>Update Email</AccountFormHeader>

					<FormInput 
						type="email"
						name="email"
						label="email"
						value={email}
						handleChange={({ target }) => setEmail(target.value)}
						error={emailError?.email}
					/>

					<Button 
						type="submit"
						variant="primary"
					>
						Change Email
					</Button>
				</AccountForm>

				{/* Username Update Form */}
				<AccountForm 
					className="d-flex d-flex-column" 
					onSubmit={updateUsername}
					noValidate
				>
					{/* Account Form Header */}
					<AccountFormHeader>Update Username</AccountFormHeader>

					<FormInput 
						type="username"
						name="username"
						label="username"
						value={username}
						handleChange={({ target }) => setUsername(target.value)}
						error={usernameError}
					/>

					<Button 
						type="submit"
						variant="primary"
					>
						Change Username
					</Button>
				</AccountForm>

				{/* Password Update Form */}
				<AccountForm 
					className="d-flex d-flex-column" 
					onSubmit={updatePassword}
					noValidate
				>
					{/* Account Form Header */}
					<AccountFormHeader>Update Password</AccountFormHeader>

					<FormInput 
						type="password"
						name="current-password"
						label="Current password"
						value={currentPassword}
						handleChange={({ target }) => setCurrentPassword(target.value)}
						error={currentPasswordError}
					/>

					<FormInput 
						type="password"
						name="new-password"
						label="New password"
						value={newPassword}
						handleChange={({ target }) => setNewPassword(target.value)}
						error={newPasswordError}
					/>

					<FormInput 
						type="password"
						name="confirm-new-password"
						label="confirm new password"
						value={confirmNewpassword}
						handleChange={({ target }) => setConfirmNewPassword(target.value)}
						error={confirmNewpasswordError}
					/>

					<Button 
						type="submit"
						variant="primary"
					>
						Change password
					</Button>
				</AccountForm>

				{/* Account Form */}
				<AccountForm 
					className="d-flex d-flex-column" 
					onSubmit={generateAPIKEY}
					noValidate
				>
					{/* Account Form Header */}
					<AccountFormHeader>Generate Api Key</AccountFormHeader>

					<FormInput 
						type="password"
						name="api-key"
						label="Api key"
						placeholder="**************************************************************"
						value={apiKey}
						handleChange={({ target }) => setApiKey(target.value)}
						error={apiKeyError}
					/>

					<Button 
						type="submit"
						variant="primary"
					>
						Generate Api key
					</Button>
				</AccountForm>
			</AccountFormsContainer>
		</>
	)
}

export default Account;