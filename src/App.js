import React from 'react';
import './App.css';
import './Components/Login/Login.css'
import Nav from './Components/Nav/Nav'
import routes from './routes'
import './Components/Nav/Nav.css'
import {getUser} from './ducks/reducers/userReducer'
import { connect } from 'react-redux';
import Login from './Components/Login/Login'
import './Components/Form/Form.css'
import './Components/Dashboard/Dashboard.css'

class App extends React.Component {
  componentDidMount(){
    this.props.getUser()
    console.log(this.props.getUser)
  }

  render(){
  return (
    <div className="App">
      {!this.props.user_id ? 
      <Login />
      : 
      <div className="Container">
        <Nav />
        {routes}
      </div>
      
    }
    </div>
  );
}
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.userReducer.user_id
  }
}

export default connect(mapStateToProps, {
  getUser
})(App);
