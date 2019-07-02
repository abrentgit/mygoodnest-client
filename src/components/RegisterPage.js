import React from 'react';
import Register from './Register';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export function RegisterPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
            <h2>Goodnest Register</h2>
            <Register />
            <Link to="/">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPage);
