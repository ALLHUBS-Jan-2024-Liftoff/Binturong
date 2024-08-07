import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const ProfileEdit = () => {
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [preview, setPreview] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setProfilePicture(file);
        setPreview(URL.createObjectURL(file));
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('dob', dob);
        formData.append('profilePicture', profilePicture);

        try {
            const response = await axios.post('YOUR_BACKEND_API_URL', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Profile updated successfully', response.data);
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </div>
                <div {...getRootProps()} style={{ border: '1px solid black', padding: '20px', margin: '10px 0' }}>
                    <input {...getInputProps()} />
                    {preview ? (
                        <img src={preview} alt="Profile Preview" style={{ width: '100px', height: '100px' }} />
                    ) : (
                        <p>Drag 'n' drop profile picture here, or click to select file</p>
                    )}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ProfileEdit;