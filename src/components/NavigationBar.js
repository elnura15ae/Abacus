import React from 'react'
import {Link} from 'react-router-dom'

export default function NavigationBar() {
    return (
    <nav className="navbar">
      <h1>Mental Math</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/methode" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Methode</Link>
      </div>
    </nav>
    )
}
