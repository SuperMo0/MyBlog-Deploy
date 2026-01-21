import React from 'react'
import { useAuth } from './AuthProvider'
import { Navigate } from 'react-router';

export default function RequireAuth({ children }) {
    const { admin } = useAuth();
    if (!admin) {
        return <Navigate to={'/admin/login'}></Navigate>
    }
    else {
        return children;
    }
}
