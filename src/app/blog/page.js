import React from 'react';

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]

export default function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex justify-center items-center mt-2">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-8">Welcome Blog</h1>
                <p className="text-lg text-gray-800 mb-6">
                    Blog </p>
                <a
                    href="/about"
                    className="bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
                >
                    More
                </a>
            </div>
        </div>
    );
}

