import React, { useState, useEffect } from 'react';

const LoyaltyScore = ({ userId }) => {
    const [loyaltyScore, setLoyaltyScore] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLoyaltyScore = async () => {
            try {
                const response = await fetch(`http://localhost:8080/loyalty-score?user_id=${userId}`, {
                    credentials: 'include', // Include credentials for authentication
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setLoyaltyScore(data.totalScore);
            } catch (error) {
                console.error('Error fetching loyalty score:', error);
                setError(error.message);
            }
        };

        fetchLoyaltyScore();
    }, [userId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (loyaltyScore === null) {
        return <h3>Loading your loyalty score... </h3>  // this displays the loading state
    }

    return (
        <h3>Your Loyalty Score is: {loyaltyScore}</h3>
    );
};

export default LoyaltyScore;