import React, { Component } from 'react';
import Login from '../components/Login/Login';
import Register from '../components/Register';

class AuthContainer extends Component {
    render() {

        const { auth } = this.props

        return (
            <div>

                {/* LOGIN */}
                {
                    auth === 'login' && <Login />  
                }

                {/* REGISTER */}
                {
                    auth === 'register' && <Register />
                }

            </div>
        )
    }
}

export default AuthContainer
