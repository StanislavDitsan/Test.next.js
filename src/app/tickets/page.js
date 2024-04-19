import React from 'react'
import TicketList from './TicketList';


export default function Tickets() {
    return (
        <div className="main py-8 bg-gradient-to-b from-blue-200 to-blue-400 flex justify-center items-center mt-2">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-2">Tickets</h1>
                <p className="text-lg text-gray-800 mb-6">
                    Open Tickets </p>
                
                <TicketList/>
                <a
                    href="/"
                    className="bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
                >
                    Back
                </a>
            </div>
        </div>
    );
}

