import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from './utils/ProtectedRoute'
import { Provider } from 'react-redux';
import store from './store'; 
import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";
import jwt_decode from "jwt-decode"
import Dashboard from './containers/Dashboard'
import Login from "./containers/Login";
import Register from './containers/Register'
import Home from './containers/Home'
import Members from './containers/Members'
import CreateMember from './containers/CreateMember'
import Messages from './containers/Messages'
import Notifications from './containers/Notifications'
import Search from './containers/Search'
import {SET_USER} from "./redux/Constants"
import { logoutUser } from "./redux/actions/authActions"
import {SET_SIDEBAR} from './redux/Constants'

const hist = createBrowserHistory();
let user = ""
if(localStorage.pyc_token){
    // setAuthToken(localStorage.pyc_token)
    user = jwt_decode(localStorage.pyc_token)
    console.log("APP USER", user)
    store.dispatch({
        type: SET_USER,
        payload: user
    })

    const currentTime = Date.now() / 1000;
    if (user.exp < currentTime) {
      // Logout user
       store.dispatch(logoutUser());
    //   // Clear current Profile
      window.location.href = '/login';
    }
}


let name = ""
let pic =""
if(localStorage.f && localStorage.pic){
  name = localStorage.f+" "+localStorage.l
  pic = localStorage.pic
  let obj = {
    name,
    pic
  }
  store.dispatch({
    type: SET_SIDEBAR,
    payload: obj
  })
//   window.location.reload()
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router history={hist}>
                <div>
                    <Route 
                        exact 
                        path="/" 
                        component={Home}
                    />
                    <Route
                         exact 
                         path="/login" 
                         component={Login}
                    />
                    <Route 
                        exact 
                        path="/register" 
                        component={Register} 
                    />  
                    <Switch>
                        <ProtectedRoute 
                            exact 
                            path="/statistics" 
                            component={Members}
                        />
                    </Switch>
                    <Switch>
                        <ProtectedRoute 
                            exact 
                            path="/create-user" 
                            component={CreateMember}
                        />
                    </Switch>
                    <Switch>
                        <ProtectedRoute 
                            exact 
                            path="/search" 
                            component={Search}
                        />
                    </Switch>
                    <Switch>
                        <ProtectedRoute 
                            exact 
                            path="/messages" 
                            component={Messages}
                        />
                    </Switch>
                    <Switch>
                        <ProtectedRoute 
                            exact 
                            path="/notifications" 
                            component={Notifications}
                        />                    
                    </Switch>
                    <Switch>
                        <ProtectedRoute 
                            exact 
                            path="/dashboard" 
                            component={Dashboard}
                        />
                    </Switch>

                </div>
            </Router>
        </Provider>
    )
  }
}


export default App