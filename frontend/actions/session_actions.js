import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const removeErrors = () => {
    return {
        type: REMOVE_ERRORS,
    }
}

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user).then(
        user => dispatch(receiveCurrentUser(user)),
        err => {
            return dispatch(receiveErrors(err.responseJSON))
        }
    )
}

export const login = user => dispatch => {
    return SessionApiUtil.login(user).then(
        user => (dispatch(receiveCurrentUser(user))),
        err => {
            return dispatch(receiveErrors(err.responseJSON))
        }
    )
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout().then(
        () => dispatch(logoutCurrentUser())
    )
}

export const switchForms = () => dispatch => {
    dispatch(removeErrors())
}