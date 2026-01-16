import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router';
import { createContext } from 'react';
import { useContext } from 'react';


const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));

    let admin = null;
    if (token) {
        let data = token.split('.');
        data = data[1];
        data.replace(/\-/g, '+');
        data.replace(/\_/g, '/');
        admin = atob(data);
    }

    function login(token) {
        localStorage.setItem('token', token);
        setToken(token);
    }

    function logout(token) {
        localStorage.removeItem('token');
        setToken(null);
    }
    return (
        <AuthContext value={{ login, logout, admin }}>
            {children}
        </AuthContext >
    )
}
export const useAuth = () => useContext(AuthContext);
