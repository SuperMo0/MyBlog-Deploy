import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { MdNightlight, MdMenu, MdClose } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

export default function Header({ handleThemeChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinkClass = ({ isActive }) => {
        return `text-lg font-medium transition-colors hover:text-[var(--accent)] ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
            }`;
    }

    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-(--bg-primary)/90 border-b border-(--border-color) transition-colors duration-300">
            <div className="wrapper flex justify-between items-center h-16">

                <div className="font-bold text-2xl tracking-tighter">
                    <NavLink to="/">
                        <span className="text-(--accent)">My</span>Blog
                    </NavLink>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <NavLink className={navLinkClass} to="/">Home</NavLink>
                    <NavLink className={navLinkClass} to="/about">About</NavLink>
                    <NavLink className={navLinkClass} to="/contact">Contact</NavLink>

                    <NavLink className={navLinkClass} to="/admin/dashboard">Admin</NavLink>

                    <button
                        onClick={handleThemeChange}
                        className="p-2 rounded-full hover:bg-(--bg-card) transition-colors text-xl"
                        aria-label="Toggle Theme"
                    >
                        <div className="hidden dark:block"><BsSunFill className="text-yellow-400" /></div>
                        <div className="block dark:hidden"><MdNightlight className="text-slate-700" /></div>
                    </button>
                </nav>

                <button className="md:hidden text-2xl p-2" onClick={toggleMenu}>
                    {isMenuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-(--bg-card) border-b border-(--border-color) shadow-xl animate-fade-in-down">
                    <nav className="flex flex-col p-6 space-y-4 text-center">
                        <NavLink onClick={toggleMenu} className={navLinkClass} to="/">Home</NavLink>
                        <NavLink onClick={toggleMenu} className={navLinkClass} to="/about">About</NavLink>
                        <NavLink onClick={toggleMenu} className={navLinkClass} to="/contact">Contact</NavLink>
                        <NavLink onClick={toggleMenu} className={navLinkClass} to="/admin/login">Login</NavLink>

                        <button
                            onClick={() => { handleThemeChange(); toggleMenu(); }}
                            className="mt-4 mx-auto p-2 bg-(--bg-primary) rounded-full border border-(--border-color)"
                        >
                            <div className="hidden dark:block text-yellow-400"><BsSunFill /> Light Mode</div>
                            <div className="block dark:hidden text-slate-700"><MdNightlight /> Dark Mode</div>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}