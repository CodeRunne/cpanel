import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginAuthApi, encryptionKey } from '../../../config';
import encryptData from '../../../assets/_helpers/encrypt-data';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
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
    const navigate = useNavigate();
    const { setCurrentUser, isLoading, setIsLoading } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [errors, setErrors] = useState({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [responseErrorMessage, setResponseErrorMessage] = useState("");

    function loginUser(e) {
        e.preventDefault();

        setErrors(LoginValidation({
            username, 
            password
        }));

        // set isLoading to false
        setIsLoading(false);

        setFormIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && formIsSubmitted) {
            const user = {
                username,
                password,
                check
            };


            setTimeout(() => {
                axios.post(loginAuthApi, user)
                    .then(({ data }) => {
                        const { status, user, message } = data;

                        if(status === "success") {
                            // set isLoading to false
                            setIsLoading(true);

                            // Encrypt user data
                            const encryptUser = encryptData(user, encryptionKey);

                            sessionStorage.setItem("token", JSON.stringify(encryptUser));

                            setCurrentUser(user);
                            
                            // Empty input fields
                            setUsername("");
                            setPassword("");

                            // Navigate to dashboard
                            navigate("/dashboard");
                        } else {
                            // set isLoading to false
                            setIsLoading(true);

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
            }, 1500);
        }
    }, [errors, formIsSubmitted, username, password, setCurrentUser, setResponseErrorMessage, setIsLoading, navigate, setUsername, setPassword, isLoading, check]);

    return (
        <FormContainer  
            headerText="Log in"
            subHeaderText="to your account"
            submitForm={loginUser}
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
                isDisabled={!isLoading}
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