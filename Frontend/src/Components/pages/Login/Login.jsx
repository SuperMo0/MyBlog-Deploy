import React, { useState } from 'react';
import { useAuth } from '../../../Auth/AuthProvider';
import api from './../../../utils/Api.js';
import { useNavigate } from 'react-router';

export default function Login() {
    const { login } = useAuth();
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function handleLoginSubmit(e, guest) {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const form = e.target;

        let object;
        if (!guest)
            object = Object.fromEntries(new FormData(form).entries());
        else {
            object = {
                email: 'guest@email.com',
                password: '123'
            }
        }

        try {
            const [res, ok] = await api('/admin/login', { method: 'post', body: JSON.stringify(object) });

            if (!ok) {
                setMessage(res.message || "Login failed");
            } else {
                login(res.token);
                navigate('/admin/dashboard');
            }
        } catch (error) {
            setMessage("Network error occurred");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-(--bg-card) p-10 rounded-2xl shadow-xl border border-(--border-color)">

                <div className="text-center">
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                        Admin Access
                    </h2>
                    <p className="mt-2 text-sm text-(--text-secondary)">
                        Please sign in to continue to the dashboard
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
                    {message && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center border border-red-200">
                            {message}
                        </div>
                    )}

                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="input-field"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="input-field"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary flex justify-center items-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}