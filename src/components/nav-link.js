import React from 'react';
import { Link } from 'gatsby';


export default function NavBar() {
    return (
        <nav>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/event">Events</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}