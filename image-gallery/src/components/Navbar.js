import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <nav>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    )
}