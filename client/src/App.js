import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './providers/auth-provider/auth-provider';
import { Landing, Dashboard } from './pages';
import { ProtectedRoute } from './components';
import { APP_NAME } from './config';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  document.title = `${APP_NAME}`;
  
  return (
    <>
      <GlobalStyles />
      
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="dashboard/*" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
      </Routes>
    </>
  );
}

export default App;
