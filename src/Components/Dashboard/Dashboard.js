import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPosts, getByUsername} from '../../ducks/reducers/postReducer'
import {getUser} from '../../ducks/reducers/userReducer'



class Dashboard extends React.Component{
    constructor() {
        super()
        this.state = {
            searchUsername: ""
        }
    }
    componentDidMount = () => {
        this.props.getUser()
        this.props.getPosts()
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    searchByUsername = () => {
        const {searchUsername} = this.state
        this.props.getByUsername(searchUsername)
    
    }
    render() {
    return (
    
        <div className="Dashboard-Container">
        <div className="Search">
            <input 
            placeholder="Search by Username"
            name="searchUsername"
            onChange={this.handleInput}
            value={this.state.searchUsername} />
            <button onClick={this.searchByUsername}>Search</button>
            <h1>{this.state.searchUsername}</h1>
        </div>
        {this.props.posts ? this.props.posts.map((post, i) => {
            return <div className="Dashboard-Post" key={i}>
                <h1>{post.title}</h1>
                <img src={post.img} id="Dash-Img"/>
                <h1>{post.username}</h1>
                <Link to = {`/post/${post.post_id}`}><button>See post</button></Link>
            </div>
        }): null}
        </div>
    
    
    )
}
}
const mapStateToProps = reduxState => {
    return {
        posts: reduxState.postReducer.posts,
        username: reduxState.userReducer.username
    }
}
export default connect(mapStateToProps, {
getPosts,
getByUsername,
getUser
})(Dashboard)