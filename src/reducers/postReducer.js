import { handleActions } from 'redux-actions';
import { SET_POSTS } from '../actions/post';

export const posts = handleActions({
    [SET_POSTS]: (state, action) =>  [{ ...action.payload }]
}, []);