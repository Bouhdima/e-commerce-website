import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../logo.svg'
export default function Navbar() {
  return (
    <nav className='navbar bg-dark'>
      <div className='nav-center'>      
      <Link to="/">Bouhdima</Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
