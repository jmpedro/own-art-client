import React, { Component } from 'react'
import { user, allPosts } from '../api/account';
import Header from '../components/Header';
import Post from '../components/Post'
import { publication } from '../api/post'

class PostContainer extends Component {

    render() {

        // const { user_name, id_post } = this.props;

        return (
            <div>
                <Header user={user} />
                <Post publication={publication} user_data={user} allPost={allPosts} />
            </div>
        )
    }
}

export default PostContainer