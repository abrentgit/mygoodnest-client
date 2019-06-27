import { NavLink } from 'react-router-dom';
import React from 'react';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Your Entries</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/'>New Entry</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;

// TWO LINKS WILL BE ENTRIES AND LOGOUT