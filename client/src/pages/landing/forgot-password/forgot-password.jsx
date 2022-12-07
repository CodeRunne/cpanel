import React, { useState, useEffect } from 'react';
import EmailValidation from '../../../validation/email.validation';
import { 
    FormInput,
    FormContainer,
    Button,
    AuthEnquiry
} from '../../../components';
import { ForgotPasswordContainer, ForgotPasswordHeader, ForgotPasswordHeaderText, ForgotPasswordSubHeader } from './forgot-password.styles';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    function forgotPassword(e) {
        e.preventDefault();

        setError(EmailValidation({ email }));

        setFormIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(error).length === 0 && formIsSubmitted) {
            console.log('valid');
        }
    }, [error, formIsSubmitted]);

    return (
        <ForgotPasswordContainer>
            {/* Forgot password header */}
            <ForgotPasswordHeader>
                <ForgotPasswordHeaderText>Reset password</ForgotPasswordHeaderText>
                <ForgotPasswordSubHeader>Forgotten your password? Enter your email address below to begin reset process.</ForgotPasswordSubHeader>
            </ForgotPasswordHeader>

            {/* Forgot password container */}
            <FormContainer submitForm={forgotPassword}>

                <FormInput
                    type="email"
                    name="email"
                    label="Email address"
                    value={email}
                    handleChange={({ target }) => setEmail(target.value)}
                    error={error?.email}
                />

                <Button 
                    variant="primary"
                    style={{ width: '100%' }}
                >
                    Submit
                </Button>

                <AuthEnquiry 
                    enquiry="Not a member yet" 
                    enquiryPage="Create an account"
                    route="/register"
                />
            </FormContainer>
        </ForgotPasswordContainer>
    )
}

export default ForgotPassword;