import React, { useState, useEffect } from 'react';
import EmailValidation from '../../../validation/email.validation';
import { 
    FormInput,
    FormContainer,
    Button
} from '../../../components';


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
        <FormContainer  
            headerText="Forgot password"
            submitForm={forgotPassword}
        >
            <FormInput
                type="email"
                name="email"
                label="Email"
                placeholder="email@gmail.com"
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
        </FormContainer>
    )
}

export default ForgotPassword;