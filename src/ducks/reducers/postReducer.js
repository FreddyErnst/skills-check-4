import axios from "axios"

const initialState = {
    posts: [],
    post: [],
    title: "",
    img: "",
    content: ""
}

const GET_POSTS = "GET_ALL_POSTS"
const GET_POST_BY_USERNAME = "GET_POST_BY_USERNAME"
const ADD_POST = "ADD_POST"
const GET_POST_BY_ID = "GET_POST_BY_ID"


export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get('/api/posts')
    }
}
export function getPostById (post_id) {
    return {
        type: GET_POST_BY_ID,
        payload: axios.get(`/api/post/${post_id}`)
    }
}

export function getByUsername(searchUsername) {
    return {
        type: GET_POST_BY_USERNAME,
        payload: axios.get(`/api/posts/username?username=${searchUsername}`)
    }
}

export function addPost(post) {
    return {
        type: ADD_POST,
        payload: axios.post('/api/post', post)
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case `${GET_POSTS}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            }
        case `${ADD_POST}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            }
        case `${GET_POST_BY_ID}_FULFILLED`:
            return {
                ...state,
                post: payload.data
            }
            default: return state
    }
}