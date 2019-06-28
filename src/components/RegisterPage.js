import React from 'react';
// import {Redirect} from 'react-router-dom';

import Register from './register';


export function RegisterPage() {
    // if (props.loggedIn) {
    // 	return <Redirect to="/userHome" />;
    // }
    return (
        <div className="register-form">
            <Register />
        </div>
    );
}

