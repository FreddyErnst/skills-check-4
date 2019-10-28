import Axios from "axios"

const initialState = {
    user_id: null,
    username: "",
    profile_pic: ""
}

const GET_USER = "GET_USER"
const REGISTER_USER = "REGISTER_USER"
const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"
const EDIT_USERNAME = "EDIT_USERNAME"

export function getUser() {
    return {
        type: GET_USER,
        payload: Axios.get('/auth/user')
    }
}

export function editUsername(username) {
    return {
        type: EDIT_USERNAME,
        payload: Axios.put('/api/user/username', username)
    }
}

export function registerUser(newUser) {
    
    return {
        type: REGISTER_USER,
        payload: Axios.post('/auth/register', newUser)
    }
}

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: Axios.post('/auth/login', user)
    }
}

export function logoutUser() {
    Axios.post('/auth/logout')
    window.location.reload()
    return {
        type: LOGOUT_USER
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                profile_pic: payload.data.profile_pic
            }

        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                profile_pic: payload.data.profile_pic
            }
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                profile_pic: payload.data.profile_pic
            }
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                user_id: null,
                username: "",
                profile_pic: ""
            }
        case `${EDIT_USERNAME}_FULFILLED`:
            return {
                ...state,
                username: payload.data.username
            }

        default: return state
    }
}



