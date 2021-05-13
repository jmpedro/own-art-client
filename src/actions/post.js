import { createAction } from 'redux-actions';
import { getAllPostApi } from '../api/post';
import { URL_PATH } from '../utils/constants';

export const SET_POSTS = 'SET_POSTS'

const urlGetAllPost = `${URL_PATH}/publications/all`;

export const setPosts = createAction(SET_POSTS, () => getAllPostApi(urlGetAllPost))