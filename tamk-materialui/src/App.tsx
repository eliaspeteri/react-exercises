import React from 'react';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Settings from './components/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
