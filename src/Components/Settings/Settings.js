import React, { Component } from 'react'
import {editUsername} from '../../ducks/reducers/userReducer'
import {connect} from 'react-redux'
import Axios from 'axios'

class Settings extends Component {
    constructor() {
        super() 
        this.state = {
            username: ''
        }
    }

    handleInput = e => {
this.setState({
    [e.target.name]: e.target.value
})

console.log(this.state)
    }

    editUsername = () => {
        this.props.editUsername(this.state)
        // Axios.put('/api/user/username', this.state.username)
    }
    render() {
        return (
            <div>
                <input
                name= "username"
                onChange = {this.handleInput}
                />
                <button onClick={this.editUsername()}>Edit Username</button>
            </div>
        )
    }
}

export default connect(undefined, {
    editUsername
})(Settings)

