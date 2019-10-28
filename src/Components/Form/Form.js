import React from 'react'
import { connect } from 'react-redux'
import {addPost} from '../../ducks/reducers/postReducer'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            img: "",
            content: ""
        }
        
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addPost = () => {
        const {title, img, content} = this.state
        const {user_id} = this.props
        const post = {title, img, content, user_id}
        this.props.addPost(post)
    }

    render() {
    return (
        <div className="Form-Container">
            <div >
                <h1>New Post</h1>
                <span>Title:</span>
                <input
                type="text"
                name="title"
                onChange = {this.handleInput}
                />
            </div>
            <div className="Form-Image" style={{backgroundImage: `url(${this.state.img})`}}>
                
            </div>
            <div>
                <span>Image URL:</span>
                <input
                type="text"
                name="img"
                onChange={this.handleInput}
                
                />
                <span>Content:</span>
                <textarea 
                rows='9'
                cols="120"
                type="text"
                name="content"
                onChange = {this.handleInput}
                ></textarea>
            </div>
            <button>Post</button>
        </div>
    )
}
}
const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        img: reduxState.postReducer.img
    }
}

export default connect(mapStateToProps, 
{addPost})(Form)