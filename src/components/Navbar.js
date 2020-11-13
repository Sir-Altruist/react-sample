import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-md'>
                <a className='navbar-brand' href='#'>ALTRUIST TECH HUB</a>
                <button className='navbar-toggler navbar-dark bg-dark' 
                type='button' 
                data-toggle='collapse'
                data-target='#navbarResponsive' 
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                >
                    <span className='bars'><FontAwesomeIcon icon='bars' /></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>
                    <ul className='navbar-nav mx-auto'>
                        <li className='nav-item active ml-4'>
                            <a className='nav-link text-dark' href='#'>Home</a>
                        </li>
                        <li className='nav-item ml-4'>
                            <a className='nav-link text-dark' href='#'>About Us</a>
                        </li>
                        <li className='nav-item ml-4'>
                            <a className='nav-link text-dark' href='#'>Services</a>
                        </li>
                        <li className='nav-item ml-4'>
                            <a className='nav-link text-dark' href='#'>Events</a>
                        </li>
                        <li className='nav-item ml-4'>
                            <a className='nav-link text-dark' href='#'>Blog</a>
                        </li>
                        <li className='nav-item ml-4'>
                            <button type='button' className='btn btn-sm btn-outline-primary'><a href='#'>Contact Us</a></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
