import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthPages.css';

const LoginPage = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // ✅ Fixed error here
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const response = await axios.post('/api/auth/login', formData);

            if (response.data.requires2FA) {
                // Save email for OTP verification
                localStorage.setItem('tempEmail', formData.email);
                navigate('/verify-otp');
            } else {
                // Handle successful login
                onLogin(response.data.token, response.data.user);
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-form-container">
                    <h1 className="auth-title">Welcome Back!</h1>
                    <p className="auth-subtitle">Login to access your safety dashboard</p>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="forgot-password">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="auth-button" disabled={loading}>
                            {loading ? 'Logging In...' : 'Login'}
                        </button>
                    </form>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <button className="social-auth-button google">
                        <i className="fab fa-google"></i> Continue with Google
                    </button>

                    <p className="auth-redirect">
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </p>
                </div>

                <div className="auth-image-container">
                    <div className="auth-image">
                        <img src="/images/login-illustration.svg" alt="Woman using mobile app" />
                    </div>
                    <div className="auth-image-text">
                        <h2>Your Safety Companion</h2>
                        <p>StreeRksha provides you with tools and resources to stay safe in any situation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
