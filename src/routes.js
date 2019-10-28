import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import Post from './Components/Post/Post'
import Form from './Components/Form/Form'
import Settings from './Components/Settings/Settings'


export default (
    <Switch>
        <Route exact path = '/' component={Login}/>
        <Route path = '/dashboard' component={Dashboard}/>
        <Route path = '/form' component={Form}/>
        <Route path = '/settings' component={Settings}/>
        <Route path = '/post/:id' component={Post}/>
        

    </Switch>
)