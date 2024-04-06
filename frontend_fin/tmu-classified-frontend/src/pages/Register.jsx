import React, { useState } from 'react';
import './SignIn.css'; // Reusing the same CSS file
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header'

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');  
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !username || !password || !confirmPassword) {
            setError('All fields must be filled in.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const response = await fetch('http://127.0.0.1:8000/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                username,
                password,
            }),
        });

        const data = await response.json();

        if (response.status === 400) {
            setError(data.email || data.username);
        } else {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('loggedin', 'true');
            setError('');  // Clear the error message
            navigate('/');
        }
    };

    return (
        <div className='signin-page'>
            <Header />
            <div className='signin-body'>
                <div className="signin-container">
                    <h2 className="signin-title">Register</h2>
                    {error && <div className="error-text">{error}</div>} 
                    <form className="signin-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email" className="signin-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Username" className="signin-input" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" className="signin-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="Confirm Password" className="signin-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button type="submit" className="signin-button">Create Account</button>
                    </form>
                    <p className="signin-text">Already have an account? <Link to="/SignIn" >Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
