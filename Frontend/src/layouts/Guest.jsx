import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

export default function Guest({ handleThemeChange }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header handleThemeChange={handleThemeChange} />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}