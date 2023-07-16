import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1 className="text-center py-2 px-2 bg-dark text-white"> Welcome to Crud App </h1>
            <Link to="/" className='btn btn-primary'>Home</Link>
            <Link to="/about" className='btn btn-info'>About</Link>

            <hr />

        </div>

    )
}
