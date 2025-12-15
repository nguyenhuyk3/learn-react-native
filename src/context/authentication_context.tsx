import React, { createContext, useState, useContext } from 'react';

type AuthenticationContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

const AuthenticationContext = createContext<AuthenticationContextType>({
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
});

export const AuthenticationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthenticationContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export const useAuthentication = () => useContext(AuthenticationContext);