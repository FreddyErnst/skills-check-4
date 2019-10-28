const bcrypt = require('bcryptjs')

module.exports = {
    

    getUser: function (req, res) {
        if (req.session.user) {
            res.status(200).json(req.session.user)
            console.log(req.session.user)
        } else {
            res.status(409).json('No session')
        }
    },

    registerUser: async function (req, res) {
        
        const {username, password} = req.body
        const db = req.app.get('db')

        const userExists = await db.checkForUsername(username)

        if (userExists[0]) {
            res.status(409).json("Username taken")
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newUser = await db.registerUser(username, hash)

            req.session.developer = {
                user_id: newUser[0].user_id,
                username: newUser[0].username,
                profile_pic: newUser[0].profile_pic
                
            
            }
            res.status(200).json(req.session.user)
        }
    },

    loginUser: async function (req, res) {
        const {username, password} = req.body
        const db = req.app.get('db')
        
        const foundUser = await db.checkForUsername(username)

        if(!foundUser[0]){
            res.status(403).json('Username or Password false')
        } else {
            const hash = foundUser[0].password
            const isAuthenticated = bcrypt.compareSync(password, hash)

            if(!isAuthenticated) {
                res.status(403).json('Username or password incorrect')
            } else {
                req.session.user = {
                    user_id: foundUser[0].user_id,
                    username: foundUser[0].username,
                    profile_pic: foundUser[0].profile_pic
                }
            }
            res.status(200).json(req.session.user)
        }
    },

    logOut: async (req, res) => {
        req.session.destroy()
        res.status(200).json('Logged Out')
    },

    editUsername: async (req, res) => {
        const {username} = req.body
        const {user_id} = req.session.user
        const db = req.app.get('db')
        const newUsername = db.editUsername(username, user_id)
        res.status(200).json(newUsername)
    }
}