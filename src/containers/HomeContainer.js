import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header';
import NavFilters from '../components/NavFilters';
import { user } from '../api/account'
import { connect } from 'react-redux';
import { getPosts } from '../selectors/postSelector';
import { setPosts } from '../actions/post';

class HomeContainer extends Component {

    componentDidMount() {
        
        this.props.setPosts()

    }

    render() {

        return (
            <div>
                <Header user={user} />
                <NavFilters allPosts={this.props.posts[0]} header={'Todos los proyectos'} />
            </div>
        )
    }
}

HomeContainer.propTypes = {
    setPosts: PropTypes.func.isRequired,
}

HomeContainer.defaultProps = {
    posts: []
}

const mapDispatchToProps = dispatch => (
    {
        setPosts: () => dispatch(setPosts())
    }
)

const mapStateToProps = state => (
    {
        posts: getPosts(state)
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
