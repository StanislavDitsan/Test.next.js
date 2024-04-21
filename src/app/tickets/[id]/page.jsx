import React from 'react'
import Link from "next/link"

async function getTicket(id) {
    const res = await fetch('http://localhost:4000/blogs/' + id, {
        next: {
            revalidate: 30
        }
    })

    return res.json()
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id)


    return (
        <main>
            <h2>Ticket Details</h2>
            <nav>
                <div className='card'>
                    <h3>{ticket.title}</h3>
                    <small>Created by {ticket.user_email}</small>
                    <p>{ticket.body}</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                    <Link className='inline-block hover:bg-emerald-300 py-2 px-4 rounded' href="/tickets">
                        <h3>Back</h3>
                    </Link>
                </div>
            </nav>
        </main>
    )
}