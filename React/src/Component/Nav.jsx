import React from 'react'
import {Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="container">
            <nav>
            <h3>Nav</h3>
            <div>
                    <ul>
                        
                    <Link to="/">
                    <li>Home</li>
                </Link>
                        <Link to="/login">
                            <li>login</li>
                        </Link>
                        <Link to="/signup">
                            <li>signup</li>
                        </Link>
            
        </ul>
            </div>
            </nav>
            
            
            
        </div>
    )
}

export default Nav
