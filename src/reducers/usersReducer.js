import { handleActions } from 'redux-actions';
import { SET_USERS } from '../actions/usersAction';

export const users = handleActions({
    [SET_USERS]: (state, action) => [{ ...action.payload }]
}, [])