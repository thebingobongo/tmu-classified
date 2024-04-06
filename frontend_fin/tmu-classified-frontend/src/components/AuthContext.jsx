import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedLoggedIn = sessionStorage.getItem('loggedin') === 'true';
        return storedLoggedIn;
    });

    const handleLogin = () => {
        setIsLoggedIn(true);
        sessionStorage.setItem('loggedin', 'true');
    };

    const handleLogout = () => {
        const token = sessionStorage.getItem('token');
        fetch('http://127.0.0.1:8000/logout/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
                'accept': 'application/json'
            }
        })
        .then(() => {
            setIsLoggedIn(false);
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('loggedin');
        });
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
