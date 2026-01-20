import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Contact({ dark }) {


    return (
        <div className="wrapper min-h-[60vh] flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-12">Connect with me</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <SocialLink
                    href="https://www.linkedin.com/in/mowafk-mha/"
                    icon={<FaLinkedin />}
                    label="LinkedIn"
                    color="text-blue-600"
                />
                <SocialLink
                    href="https://github.com/SuperMo0"
                    icon={dark ? <FaGithub /> : <FaGithub color='black' />}
                    label="GitHub"
                    color="text-gray-800 dark:text-white"
                />
                <SocialLink
                    href="https://codeforces.com/profile/SuperMo"
                    icon={<SiCodeforces />}
                    label="CodeForces"
                    color="text-red-500"
                />
            </div>
        </div>
    );
}

function SocialLink({ href, icon, label, color }) {
    return (
        <a
            href={href}
            target="_blank"
            className={`group flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-(--bg-card) hover:shadow-lg transition-all duration-300 ${color}`}
        >
            <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <span className="text-xl font-medium text-(--text-primary) group-hover:text-(--accent) transition-colors">
                {label}
            </span>
        </a>
    );
}