import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-heading">StreeRksha</h3>
                    <p className="footer-text">
                        Empowering women with technology for a safer world.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/community">Community</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Contact Us</h3>
                    <p><i className="fas fa-map-marker-alt"></i> Wisconsin Ave, Suite 700, Chevy Chase, MD 20815</p>
                    <p><i className="fas fa-phone"></i> +1 800 854-36-80</p>
                    <p><i className="fas fa-envelope"></i> support@streeraksha.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} StreeRksha. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;