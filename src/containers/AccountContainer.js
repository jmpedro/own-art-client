import React, { Component } from 'react'
import Header from '../components/Header';
import Profile from '../components/Profile'
import PropTypes from 'prop-types'
import { user } from '../api/account'


class AccountContainer extends Component {

    render() {

        // Cuando apliquemos la funcionalidad, con el campo name buscaremos el usuario y se lo pasaremos a los demas componentes
         const { name, place } = this.props;

        return (
            <div>
                <Header user={user} />
                <Profile user={user} place={place} />
            </div>
        )
    }
}

AccountContainer.propTypes = {
    name: PropTypes.string.isRequired,
}

export default AccountContainer
