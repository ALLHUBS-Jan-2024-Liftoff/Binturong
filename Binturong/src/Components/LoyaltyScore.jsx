import React, { useState, useEffect } from 'react';

const LoyaltyScore = ({ userId }) => {
    const [loyaltyScore, setLoyaltyScore] = useState(0);

    useEffect(() => {
        const fetchLoyaltyScore = async () => {
            try {
                const response = await fetch(`http://localhost:8080/loyalty-score?user_id=${userId}`);
                const data = await response.json();
                setLoyaltyScore(data.total_score);
            } catch (error) {
                console.error('Error fetching loyalty score:', error);
            }
        };

        fetchLoyaltyScore();
    }, [userId]); // Dependency array with userId

    return (
        <h3>Your Loyalty Score is: {loyaltyScore}</h3>
    );
};

export default LoyaltyScore;