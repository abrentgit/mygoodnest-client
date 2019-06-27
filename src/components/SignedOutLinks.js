import { NavLink } from 'react-router-dom';
import React from 'react';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;