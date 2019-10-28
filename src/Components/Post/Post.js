import React from 'react'
import { connect } from 'react-redux'
import {getPostById} from '../../ducks/reducers/postReducer'


class Post extends React.Component {
    constructor() {
        super()
        this.state = {
            post: []
        }
    }
    // componentDidMount = () => {
    // this.props.getPostById(this.props.match.params.post_id)
    // }
    render() {
        const {post} = this.props
    return (
    
        <div id="match">
            <h1 id="match">{this.props.match.params.id}</h1>
            {/* {post.title} */}
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return {
        post: reduxState.postController.post
    }
}

export default connect(undefined, {
getPostById
})(Post)


