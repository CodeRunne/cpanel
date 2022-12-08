import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { registerAuthApi, encryptionKey } from '../../../config';
import encryptData from '../../../assets/_helpers/encrypt-data';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import RegistrationValidation from '../../../validation/registration.validation';
import { 
    FormInput,
    FormContainer,
    Button,
    AuthEnquiry
} from '../../../components';

function Register() {
    const navigate = useNavigate();
    const { setCurrentUser, isLoading, setIsLoading } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [responseErrorMessage, setResponseErrorMessage] = useState("");

    function registerUser(e) {
        e.preventDefault();

        setErrors(RegistrationValidation({
            username, 
            email,
            password,
            confirmPassword
        }));

        if([username, email, password, confirmPassword].every(value => Boolean(value)) && password === confirmPassword)
            setIsLoading(true);

        setFormIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && formIsSubmitted) {
            const user = {
                username,
                email,
                password,
            };

            setTimeout(() => {
                axios.post(registerAuthApi, user)
                    .then(({ data }) => {
                        const { status, user, message } = data;

                        if(status === "success") {
                            // set isLoading to false
                            setIsLoading(false);

                            // Encrypt user data
                            const encryptUser = encryptData(user, encryptionKey);

                            sessionStorage.setItem("token", JSON.stringify(encryptUser));

                            setCurrentUser(user);

                            // Empty input fields
                            setUsername("");
                            setEmail("");
                            setPassword("");

                            navigate('/confirm-mail');
                        } else {
                            // set isLoading to false
                            setIsLoading(false);

                            // setCurrentUser to null
                            setCurrentUser(null);

                            setResponseErrorMessage(message);
                        }
                    })
                    .catch(error => {
                        // set isLoading to false
                        setIsLoading(false);

                        // setCurrentUser to null
                        setCurrentUser(null);

                        setResponseErrorMessage(error)
                    });   
            }, 1000);
        }
    }, [errors, formIsSubmitted, username, email, password, setCurrentUser, setResponseErrorMessage, setIsLoading, navigate, setUsername, setEmail, setPassword, isLoading]);

    return (
        <FormContainer  
            headerText="Sign up"
            subHeaderText="Get the most out of it"
            submitForm={registerUser}
        >
            {responseErrorMessage && <span>{responseErrorMessage}</span>}

            <FormInput
                type="text"
                name="username"
                label="Username"
                value={username}
                handleChange={({ target }) => setUsername(target.value)}
                error={errors?.username}
            />

            <FormInput
                type="text"
                name="email"
                label="Email"
                value={email}
                handleChange={({ target }) => setEmail(target.value)}
                error={errors?.email}
            />

            <FormInput
                type="password"
                name="password"
                label="Password"
                value={password}
                handleChange={({ target }) => setPassword(target.value)}
                error={errors?.password}
            />

            <FormInput
                type="password"
                name="confirm_password"
                label="Confirm password"
                value={confirmPassword}
                handleChange={({ target }) => setConfirmPassword(target.value)}
                error={errors?.confirmPassword}
            />

            <Button 
                variant="primary"
                isDisabled={isLoading}
                style={{ width: '100%' }}
            >
                Sign up
            </Button>   

            <AuthEnquiry 
                enquiry="Already have an account" 
                enquiryPage="Sign in"
                route="/login"
            />
        </FormContainer>
    )
}

export default Register;