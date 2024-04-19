import React from 'react';

export default function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex justify-center items-center mt-2">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-8">Welcome Blog</h1>
                <p className="text-lg text-gray-800 mb-6">
                    Blog </p>
                <a
                    href="/about"
                    className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
                >
                    More
                </a>
            </div>
        </div>
    );
}
