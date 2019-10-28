module.exports = {
    getPostById: async (req, res) => {
        const {post_id} = req.params
        const db = req.app.get('db')

        const getPostId = await db.getByPostId(post_id)
        res.status(200).json(getPostId[0])
    },

    getPosts: async (req, res) => {
        const db = req.app.get('db')

        const getPosts = await db.getPosts()
        res.status(200).json(getPosts)
    },

    getPostByUsername: async (req, res) => {
        const {username} = req.query
        const db = req.app.get('db')

        const getByUsername = await db.getPostByUsername(`${username}%`)
        console.log(getByUsername)
        res.status(200).json(getByUsername)
    },

    addPost: async (req, res) => {
        const {user_id} = req.session.user
        const {title, img, content} = req.body
        const db = req.app.get('db')

        const post = await db.addPost(user_id, title, img, content)
        res.status(200).json(post)
    }


}