import React, { useState } from 'react';
import './SignIn.css'; // Importing the CSS file
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useAuth } from '../components/AuthContext';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(''); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        if ( !username || !password ) {
            setError('All fields must be filled in.');
            return;
        }

        const response = await fetch('http://127.0.0.1:8000/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await response.json();

        if (response.status === 400) {
            // Todo: error text on the login prompt
            alert(data.error);
        } else {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('loggedin', 'true');
            // Todo: Send the user to the previous page or home page and display a banner showing we logged in ig


            handleLogin();
            navigate('/');
        }
    };

    return (
        <div className='signin-page'>
            <Header />
            <div className='signin-body'>
                <div className="signin-container">
                    <h2 className="signin-title">Login to TMU Classified</h2>
                    {error && <div className="error-text">{error}</div>} 
                    <form className="signin-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" className="signin-input" required value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" className="signin-input" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="signin-button" onClick={handleSubmit}>Sign In</button>
                    </form>
                    <p className="signin-text">Don't have an account? <Link to="/Register" >Create one</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
