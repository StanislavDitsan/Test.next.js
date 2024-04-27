import React from 'react'

export default function CardCity() {
    return (
        <div class="flex flex-col items-center mt-24 space-y-8 px-4 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0">
            <article class="relative w-full sm:w-80 flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm">
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="Paris" class="absolute inset-0 h-full w-full object-cover"></img>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
            </article>

            <article class="relative w-full sm:w-80 flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm">
                <img src="https://plus.unsplash.com/premium_photo-1697729879723-1d5e65c0e9e7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Paris 2" class="absolute inset-0 h-full w-full object-cover"></img>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">Dublin</h3>
                <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of rain</div>
            </article>

            <article class="relative w-full sm:w-80 flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm">
                <img src="https://images.unsplash.com/photo-1590758351375-6a95b47f98d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Paris 2" class="absolute inset-0 h-full w-full object-cover"></img>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">Barcelona 2</h3>
                <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of sun</div>
            </article>
        </div>
    )
}
