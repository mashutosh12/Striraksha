import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmergencyButton from '../components/EmergencyButton';
import './DashboardPage.css';

const DashboardPage = ({ user }) => {
    const [stats, setStats] = useState({
        activeSessions: 0,
        emergencyContacts: 0,
        safePaths: 0,
        alertsSent: 0
    });

    const [recentActivity, setRecentActivity] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem('token');
                // Fetch dashboard stats
                const statsResponse = await axios.get('/api/dashboard/stats', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                // Fetch recent activity
                const activityResponse = await axios.get('/api/dashboard/activity', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setStats(statsResponse.data);
                setRecentActivity(activityResponse.data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="dashboard-page">
            <div className="container">
                <div className="dashboard-header">
                    <h1>Welcome, {user?.name || 'User'}</h1>
                    <p>Your safety dashboard provides real-time monitoring and quick access to safety features.</p>
                </div>
                {loading ? (
                    <div className="loading-spinner">
                        <i className="fas fa-spinner fa-spin"></i>
                        <p>Loading your data...</p>
                    </div>
                ) : (
                    <>
                        {/* Stats Section */}
                        <div className="stats-section">
                            <div className="stats-card">
                                <div className="stats-icon sessions">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="stats-info">
                                    <h3>{stats.activeSessions}</h3>
                                    <p>Active Sessions</p>
                                </div>
                            </div>

                            <div className="stats-card">
                                <div className="stats-icon contacts">
                                    <i className="fas fa-address-book"></i>
                                </div>
                                <div className="stats-info">
                                    <h3>{stats.emergencyContacts}</h3>
                                    <p>Emergency Contacts</p>
                                </div>
                            </div>

                            <div className="stats-card">
                                <div className="stats-icon routes">
                                    <i className="fas fa-route"></i>
                                </div>
                                <div className="stats-info">
                                    <h3>{stats.safePaths}</h3>
                                    <p>Safe Routes Saved</p>
                                </div>
                            </div>

                            <div className="stats-card">
                                <div className="stats-icon alerts">
                                    <i className="fas fa-bell"></i>
                                </div>
                                <div className="stats-info">
                                    <h3>{stats.alertsSent}</h3>
                                    <p>Alerts Sent</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="quick-actions">
                            <h2>Quick Actions</h2>
                            <div className="actions-grid">
                                <button className="action-button">
                                    <i className="fas fa-map-marked-alt"></i>
                                    <span>Start Journey</span>
                                </button>

                                <button className="action-button">
                                    <i className="fas fa-user-plus"></i>
                                    <span>Add Contact</span>
                                </button>

                                <button className="action-button">
                                    <i className="fas fa-cog"></i>
                                    <span>Settings</span>
                                </button>

                                <button className="action-button">
                                    <i className="fas fa-phone"></i>
                                    <span>Helpline</span>
                                </button>
                            </div>
                        </div>

                        {/* Activity Section */}
                        <div className="activity-section">
                            <h2>Recent Activity</h2>
                            <div className="activity-list">
                                {recentActivity.length > 0 ? (
                                    recentActivity.map((activity, index) => (
                                        <div className="activity-item" key={index}>
                                            <div className={`activity-icon ${activity.type}`}>
                                                <i className={`fas ${
                                                    activity.type === 'journey' ? 'fa-route' :
                                                        activity.type === 'alert' ? 'fa-exclamation-triangle' :
                                                            activity.type === 'login' ? 'fa-sign-in-alt' :
                                                                'fa-bell'
                                                }`}></i>
                                            </div>
                                            <div className="activity-details">
                                                <p className="activity-text">{activity.description}</p>
                                                <p className="activity-time">{formatDate(activity.timestamp)}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="no-activity">No recent activity to display.</p>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Emergency Button */}
            <EmergencyButton />
        </div>
    );
};

export default DashboardPage;