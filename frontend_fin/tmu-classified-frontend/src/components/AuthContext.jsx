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
        setIsLoggedIn(false);
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('loggedin');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
