import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import NavFilters from '../components/NavFilters';
import { user } from '../api/account'
import { connect } from 'react-redux';
import { getPosts } from '../selectors/postSelector';
import { setPosts } from '../actions/post';
import { setUsers } from '../actions/usersAction';
import { getUsers } from '../selectors/userSelector';

class HomeContainer extends Component {

    componentDidMount() {
        
        // Obtenemos las publicaciones
        this.props.setPosts();

        // Obtenemos los usuarios
        this.props.setUsers();

    }

    render() {

        return (
            <div>
                <Header user={user} />
                <NavFilters 
                    allPosts={this.props.posts[0]} header={'Todos los proyectos'}
                    usersDB={this.props.users[0]} />
            </div>
        )
    }
}

HomeContainer.propTypes = {
    setPosts: PropTypes.func.isRequired,
    setUsers: PropTypes.func.isRequired,
}

HomeContainer.defaultProps = {
    posts: [],
    users: []
}

const mapDispatchToProps = dispatch => (
    {
        setPosts: () => dispatch(setPosts()),
        setUsers: () => dispatch(setUsers())
    }
)

const mapStateToProps = state => (
    {
        posts: getPosts(state),
        users: getUsers(state)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
