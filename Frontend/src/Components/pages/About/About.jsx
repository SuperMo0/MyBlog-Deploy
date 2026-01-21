import React from 'react';
import me from '/me.png';
import codeforces from '/codeforces.png';
import github from '/github.png';

export default function About() {
    return (
        <div className="min-h-[80vh] py-20 flex flex-col items-center">

            <div className="wrapper w-full max-w-5xl px-4 mb-20">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="shrink-0 relative group">
                        <div className="absolute inset-0 bg-(--accent) rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <img
                            src={me}
                            width={300}
                            className="relative w-48 h-48 md:w-80 md:h-80 rounded-full object-cover border-4 border-(--bg-card) shadow-2xl"
                            alt="Mowafak Profile"
                        />
                    </div>

                    <div className="text-center md:text-left space-y-6">
                        <h1 className="text-4xl font-bold">
                            Hi, I'm <span className="text-(--accent)">Mowafak</span>.
                        </h1>

                        <p className="text-lg text-(--text-secondary) leading-relaxed">
                            I built this blog to document my journey in software engineering.
                            I recently finished <span className="font-semibold text-(--text-primary)">The Odin Project</span> curriculum, where I created more than 20 different full-stack projects.
                            <br /><br />
                            I love problem-solving! I reached <strong className='text-cyan-300'>Specialist</strong> on Codeforces and participated in the ECPC programming contest (solving 6/13 problems).
                            I am currently pursuing the Expert rank.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
                    <a
                        href="https://codeforces.com/profile/SuperMo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 transition-transform duration-300 hover:scale-[1.01]"
                    >
                        <img
                            src={codeforces}
                            alt="Codeforces Stats"
                            className="w-full h-auto object-contain rounded-xl shadow-2xl border border-(--border-color)"
                        />
                    </a>
                    <a
                        href="https://github.com/SuperMo0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 transition-transform duration-300 hover:scale-[1.01]"
                    >
                        <img
                            src={github}
                            alt="GitHub Stats"
                            className="w-full h-auto object-contain rounded-xl shadow-2xl border border-(--border-color) bg-white/5"
                        />
                    </a>
                </div>
            </div>

        </div>
    );
}