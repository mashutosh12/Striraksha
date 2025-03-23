import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-stree">Stree</span>
                    <span className="logo-rksha">Rksha</span>
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/community" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Community
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            About Us
                        </Link>
                    </li>

                    {isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <Link to="/setup" className="nav-link setup-link" onClick={() => setIsMenuOpen(false)}>
                                    Setup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleLogout} className="logout-btn">
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link to="/login" className="login-btn" onClick={() => setIsMenuOpen(false)}>
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;