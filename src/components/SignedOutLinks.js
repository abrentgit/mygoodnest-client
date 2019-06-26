import { NavLink } from 'react-router-dom';
import React from 'react';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Account</NavLink></li>
            <li><NavLink to='/'>About</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;