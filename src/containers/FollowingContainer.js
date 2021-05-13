import React, { Component } from 'react'
import { allPosts, user } from '../api/account'
import ContentFollow from '../components/ContentFollow'
import Header from '../components/Header'


class FollowingContainer extends Component {
    render() {

        // Con el nombre del usuario obtenemos todos sus seguidores y mostramos sus proyectos
        const { name } = this.props

        return (
            <div>
                <Header user={user}/>
                <ContentFollow allPosts={allPosts} header='Publicaciones de la gente que sigues' />
            </div>
        )
    }
}

export default FollowingContainer
