import React from 'react'
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300" href="/">Home</Link>
            <Link className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300" href="/blog">Blog</Link>
        </nav>
    )
}

