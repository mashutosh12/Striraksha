import React from 'react';
import { Link } from 'react-router-dom';
import EmergencyButton from '../components/EmergencyButton';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Empowering Women,<br/>
                        <span className="highlight">Ensuring Safety</span>
                    </h1>
                    <p className="hero-text">
                        Our platform leverages cutting-edge AI and advanced technology to create a safer world for women.
                        By utilizing real-time data analysis, emergency response systems, and predictive tools, we empower
                        women with the resources they need to feel secure in any situation.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/register" className="btn-primary">Get Started</Link>
                        <Link to="/about" className="btn-secondary">Learn More</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-img-container">
                        <img src="/images/hero-woman.svg" alt="Woman with superhero shadow" />
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">How We Keep You Safe</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>Real-time Location Tracking</h3>
                            <p>Keep your loved ones informed about your whereabouts during travel or emergencies.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-bell"></i>
                            </div>
                            <h3>Emergency Alerts</h3>
                            <p>Send immediate alerts to emergency contacts with just one tap in dangerous situations.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Safe Route Suggestions</h3>
                            <p>Get AI-powered route recommendations to avoid high-risk areas while traveling.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-user-friends"></i>
                            </div>
                            <h3>Community Support</h3>
                            <p>Connect with a supportive community of women sharing safety tips and resources.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">Leap into safety with AI-powered solutions at your fingertips.</h2>
                    <p className="cta-text">
                        Join thousands of women who have taken control of their safety journey with StreeRksha.
                    </p>
                    <div className="cta-form">
                        <input type="text" placeholder="Enter Your Phone Number" />
                        <button className="btn-primary">Start Now</button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">What Our Users Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"StreeRksha has completely changed how I feel when walking alone at night. The safe route feature is a game-changer!"</p>
                            </div>
                            <div className="testimonial-author">
                                <img src="/images/user1.jpg" alt="User" className="testimonial-avatar" />
                                <div>
                                    <h4>Priya Sharma</h4>
                                    <p>Delhi, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"When I felt unsafe during a cab ride, the emergency alert feature helped me get immediate support from my family."</p>
                            </div>
                            <div className="testimonial-author">
                                <img src="/images/user2.jpg" alt="User" className="testimonial-avatar" />
                                <div>
                                    <h4>Ananya Patel</h4>
                                    <p>Mumbai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"The community support has been invaluable. I've learned so many safety tips that I now share with all my friends."</p>
                            </div>
                            <div className="testimonial-author">
                                <img src="/images/user3.jpg" alt="User" className="testimonial-avatar" />
                                <div>
                                    <h4>Meera Rajput</h4>
                                    <p>Bangalore, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Button */}
            <EmergencyButton />
        </div>
    );
};

export default HomePage;