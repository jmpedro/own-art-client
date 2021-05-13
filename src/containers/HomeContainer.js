import React, { Component } from 'react'
import Header from '../components/Header';
import NavFilters from '../components/NavFilters';
import Content from '../components/Content';
import { user, allPosts } from '../api/account'

class HomeContainer extends Component {

    render() {

        return (
            <div>
                <Header user={user} />
                <NavFilters allPosts={allPosts} header={'Todos los proyectos'} />
            </div>
        )
    }
}



export default HomeContainer
