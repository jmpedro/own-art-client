import { combineReducers } from 'redux';
import { posts } from './postReducer';
import { users } from './usersReducer';

export default combineReducers({
    posts,
    users
})