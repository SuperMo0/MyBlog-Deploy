import React from 'react'
import { BsGithub } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="py-8 flex justify-center items-center gap-3 text-(--text-secondary) text-sm border-t border-(--border-color)">
            © {new Date().getFullYear()} MyBlog <a href="https://github.com/SuperMo0"><BsGithub size={25} /> </a>
        </footer>
    )
}
