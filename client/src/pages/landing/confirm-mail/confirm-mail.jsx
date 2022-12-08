import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { IoMail } from 'react-icons/io5';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import { Button } from '../../../components';
import { ConfirmMailContainer, ConfirmMailIcon, ConfirmMailHeadingText, ConfirmMailSubHeader, ConfirmMailActionContainer } from './confirm-mail.styles';

function ConfirmMail() {
    const { currentUser } = useContext(AuthContext);

    if(!currentUser)
        return <Navigate to="/login" replace />;

    return (
        <ConfirmMailContainer>
            {/* Confirm Mail Icon */}
            <ConfirmMailIcon className="d-flex d-j-cnt d-a-cnt">
                <IoMail />
            </ConfirmMailIcon>

            {/* Confirm Mail Heading Text */}
            <ConfirmMailHeadingText>Verify your email</ConfirmMailHeadingText>

            {/* Confirm Mail Sub Heading Text */}
            <ConfirmMailSubHeader>A link has been sent to your email <span className="gradient-text">josephetim375@gmail.com</span>. Click the link below to verify your email.</ConfirmMailSubHeader>

        {/* Confirm Mail Action Container */}
            <ConfirmMailActionContainer className="d-flex d-j-sbtw d-a-cnt">
                <Button variant="primary" style={{ width: '100%' }}>Verify mail</Button>
                <Button style={{ width: '100%', background: 'var(--code-block-bg)', color: 'var(--white)' }}>Resend mail</Button>
            </ConfirmMailActionContainer>
        </ConfirmMailContainer>
    )
}

export default ConfirmMail;