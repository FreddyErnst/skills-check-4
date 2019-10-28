
require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const {getUser, loginUser, registerUser, logOut, editUsername} = require('./authController')
const {getPostById, getPosts, getPostByUsername, addPost, deletePost} = require('./postController')

app.use(express.json())



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('PogChamp')
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

//auth endpoints
app.get('/auth/user', getUser)
app.post('/auth/login', loginUser)
app.post('/auth/register',registerUser)
app.post('/auth/logout', logOut)
app.put('/api/user/username', editUsername)

//post endpoints
app.get("/api/post/:post_id", getPostById)
app.get('/api/posts', getPosts)
app.get('/api/posts/username', getPostByUsername)
app.post('/api/post', addPost)




app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})