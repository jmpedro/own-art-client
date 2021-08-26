import { createAction } from "redux-actions";
import { getAllUsersApi } from "../api/users";
import { URL_PATH } from "../utils/constants";

export const SET_USERS = 'SET_USERS';

// url para buscar todos los usuarios
const urlAllUsers = `${URL_PATH}/search/users`;

export const setUsers = createAction(SET_USERS, () => getAllUsersApi(urlAllUsers));