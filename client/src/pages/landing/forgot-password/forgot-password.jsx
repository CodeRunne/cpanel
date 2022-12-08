import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import { forgotPasswordApi } from '../../../config';
import EmailValidation from '../../../validation/email.validation';
import { 
    FormInput,
    FormContainer,
    Button,
    AuthEnquiry,
    RequestErrorBox
} from '../../../components';
import { ForgotPasswordContainer, ForgotPasswordHeader, ForgotPasswordHeaderText, ForgotPasswordSubHeader } from './forgot-password.styles';

function ForgotPassword() {
    const navigate = useNavigate();
    const { isLoading, setIsLoading } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [responseError, setResponseError] = useState("");

    function forgotPassword(e) {
        e.preventDefault();

        setError(EmailValidation({ email }));

        if(email)
            setIsLoading(true);

        setFormIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(error).length === 0 && formIsSubmitted) {
            setTimeout(() => {
                axios.post(forgotPasswordApi, {email})
                    .then(({ data }) => {
                        if(data.status === "success") {
                            setIsLoading(false);

                            navigate("/login");
                        }
                        else { 
                            setIsLoading(false);

                            setResponseError(data.message);
                        }
                    })
                    .catch(error => setIsLoading(false));
            }, 1000);
        }
    }, [error, formIsSubmitted, email, setIsLoading, navigate]);

    return (
        <ForgotPasswordContainer>
            {/* Request Error */}
            {responseError && 
                <RequestErrorBox 
                    error={responseError} 
                    closeErrorBox={() =>setResponseError("")} 
                    style={{ "marginBottom": '2.3rem' }}/>}

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
                    isDisabled={isLoading}
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