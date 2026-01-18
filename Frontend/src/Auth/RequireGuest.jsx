import React from 'react'
import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router';

export default function RequireGuest({ children }) {
    const { admin } = useAuth();
    if (admin) {
        return <Navigate to={'/admin/dashboard'} state={'adawdaw'}></Navigate>
    }
    else {
        return children;
    }
}
