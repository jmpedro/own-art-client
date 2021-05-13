import React, { Component } from 'react'
import { user } from '../api/account';
import Header from '../components/Header';
import NewPost from '../components/NewPost/NewPost';

class NewPostContainer extends Component {
    render() {

        const { name } = this.props;

        return (
            <div>
                <Header user={user} />
                <NewPost name={name} />
            </div>
        )
    }
}

export default NewPostContainer
