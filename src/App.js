import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import MyBlocksPage from './pages/MyBlocksPage';


function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/my-blocks" element={<MyBlocksPage />} />
            </Routes>
        </Router>
    );
}

export default Main;
