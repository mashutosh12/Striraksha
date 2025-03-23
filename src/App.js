import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CommunityPage from './pages/CommunityPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SetupPage from './pages/SetupPage';
import DashboardPage from './pages/DashboardPage';
import VerifyOTPPage from './pages/VerifyOTPPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
// Check if token exists in localStorage
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
// You might want to fetch user info here
        }
    }, []);

    const handleLogin = (token, userData) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        setUser(userData);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <Router>
            <div className="app">
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="/login" element={!isAuthenticated ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
                        <Route path="/register" element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/dashboard" />} />
                        <Route path="/setup" element={isAuthenticated ? <SetupPage /> : <Navigate to="/login" />} />
                        <Route path="/dashboard" element={isAuthenticated ? <DashboardPage user={user} /> : <Navigate to="/login" />} />
                        <Route path="/verify-otp" element={<VerifyOTPPage onLogin={handleLogin} />} />
                        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
                        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                        <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;