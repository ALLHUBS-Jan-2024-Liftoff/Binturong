import React, { useState } from 'react';
import axios from 'axios';

const BlockUser = ({ userId }) => {
  const [isBlocking, setIsBlocking] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleBlockUser = async () => {
    setIsBlocking(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('/api/block-user', { userId });
      if (response.status === 200) {
        setSuccess('User successfully blocked.');
      } else {
        setError('Failed to block user.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsBlocking(false);
    }
  };

  return (
    <div>
      <button onClick={handleBlockUser} disabled={isBlocking}>
        {isBlocking ? 'Blocking...' : 'Block User'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default BlockUser;
