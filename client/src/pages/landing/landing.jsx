import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './home/home';
import HowToUse from './how-to-use/how-to-use';
import Services from './services/services';
import Api from './api/api';
import Login from './login/login';
import Register from './register/register';
import ConfirmMail from './confirm-mail/confirm-mail';
import ForgotPassword from './forgot-password/forgot-password';

// Components
import { Navigation, NoMatch, AuthRoute } from '../../components';

function Landing() {
    return (
        <>
            {/* Navigation */}
            <Navigation />

            <Routes>
                <Route index element={<Home />} />
                <Route path="how-to-use" element={<HowToUse />} />
                <Route path="services" element={<Services />} />
                <Route path="api" element={<Api />} />
                <Route path="login" element={
                    <AuthRoute>
                        <Login />
                    </AuthRoute>
                }/>
                <Route path="register" element={
                    <AuthRoute>
                        <Register />
                    </AuthRoute>
                }/>
                <Route path="confirm-mail" element={<ConfirmMail />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="*" element={<NoMatch path="/" style={{ left: '50%' }} />} />
            </Routes>
        </>
    );
}

export default Landing;