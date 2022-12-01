import React, { useState, useEffect } from 'react';
import LoginValidation from '../../../validation/login.validation';
import { 
    FormInput,
    FormContainer,
    Button,
    AuthEnquiry
} from '../../../components';
import { 
    LoginFeature,
    LoginFeatureRemember,
    LoginRememberText,
    ForgotPasswordText 
} from './login.styles';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [errors, setErrors] = useState({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    function loginUser(e) {
        e.preventDefault();

        setErrors(LoginValidation({
            username, 
            password
        }));

        setFormIsSubmitted(true);
    }

    console.log(username, password)

    useEffect(() => {
        if(Object.keys(errors).length === 0 && formIsSubmitted) {
            console.log('valid');
        }
    }, [errors, formIsSubmitted]);

    return (
        <FormContainer  
            headerText="Log in"
            subHeaderText="to your account"
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
                type="password"
                name="password"
                label="Password"
                value={password}
                handleChange={({ target }) => setPassword(target.value)}
                error={errors?.password}
            />

            <LoginFeature className="d-flex d-j-sbtw d-a-cnt">
                <LoginFeatureRemember className="d-flex d-j-sbtw d-a-cnt">
                    <FormInput
                        type="checkbox"
                        name="login_check"
                        value={check}
                        handleChange={e => setCheck(!check)}
                    />

                    <LoginRememberText>Remember me</LoginRememberText>
                </LoginFeatureRemember>

                {/* Forgot password Link */}
                <ForgotPasswordText to="/forgot-password" className="forgot-password gradient-text">Forgot password?</ForgotPasswordText>    
            </LoginFeature>

            <Button 
                variant="primary"
                style={{ width: '100%' }}
            >
                Sign in
            </Button>

            <AuthEnquiry 
                enquiry="Don't have an account" 
                enquiryPage="Sign up"
                route="/register"
            />
        </FormContainer>
    )
}

export default Login;