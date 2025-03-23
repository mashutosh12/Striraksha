import React, { useState } from 'react';
import './EmergencyButton.css';
import axios from 'axios';

const EmergencyButton = () => {
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleEmergency = async () => {
        if (loading) return;
        setIsActive(true);
        setLoading(true);

        try {
            // Get current location
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    // Send panic alert to backend
                    const token = localStorage.getItem('token');
                    await axios.post('/api/panic/alert',
                        { latitude, longitude },
                        { headers: { Authorization: `Bearer ${token}` } }
                    );

                    alert('Emergency alert sent successfully! Help is on the way.');
                },
                (error) => {
                    console.error('Error getting location:', error);
                    alert('Unable to get your location. Please enable location services.');
                }
            );
        } catch (error) {
            console.error('Error sending emergency alert:', error);
            alert('Failed to send emergency alert. Please try again.');
        } finally {
            setTimeout(() => {
                setIsActive(false);
                setLoading(false);
            }, 3000);
        }
    };

    return (
        <div className="emergency-button-container">
            <button
                className={`emergency-button ${isActive ? 'active' : ''} ${loading ? 'loading' : ''}`}
                onClick={handleEmergency}
                disabled={loading}
            >
                {loading ? 'Sending Alert...' : 'SOS'}
            </button>
            <p className="emergency-info">Press in case of emergency</p>
        </div>
    );
};

export default EmergencyButton;