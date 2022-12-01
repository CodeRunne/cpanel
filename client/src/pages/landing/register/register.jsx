import React, { useState, useEffect } from 'react';
import RegistrationValidation from '../../../validation/registration.validation';
import { 
    FormInput,
    FormContainer,
    Button,
    AuthEnquiry
} from '../../../components';

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    function loginUser(e) {
        e.preventDefault();

        setErrors(RegistrationValidation({
            username, 
            email,
            password,
            confirmPassword
        }));

        setFormIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && formIsSubmitted) {
            console.log('valid');
        }
    }, [errors, formIsSubmitted]);

    return (
        <FormContainer  
            headerText="Sign up"
            subHeaderText="Get the most out of it"
            submitForm={loginUser}
        >
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

export default Login;