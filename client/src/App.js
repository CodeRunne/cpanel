import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing, Dashboard } from './pages';
import { APP_NAME } from './config';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  document.title = `${APP_NAME}`;
  
  return (
    <>
      <GlobalStyles />
      
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
