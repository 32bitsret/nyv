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
// import Home from './containers/Home'
import Members from './containers/Members'
import CreateMember from './containers/CreateMember'
import Messages from './containers/Messages'
import Notifications from './containers/Notifications'
import Search from './containers/Search'
import {SET_USER} from "./redux/Constants"
import { logoutUser } from "./redux/actions/authActions"
import {SET_SIDEBAR} from './redux/Constants'
import HomePage from './containers/home/HomePage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import ContactPage from './containers/home/ContactPage';
import DocumentariesPage from './containers/home/DocumentariesPage';
import Gallery from './containers/home/Gallery';
import About from './containers/home/AboutPage';
import Settings from './containers/Settings';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import $ from 'jquery';
// import '../src/assets/home/js/active';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

library.add(faStroopwafel)

const hist = createBrowserHistory();
let user = ""
if(localStorage.pyc_token){
    user = jwt_decode(localStorage.pyc_token)
    store.dispatch({
        type: SET_USER,
        payload: user
    })

    const currentTime = Date.now() / 1000;
    if (user.exp < currentTime) {
       store.dispatch(logoutUser());
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
                        component={HomePage}
                    />
                    <Route
                        exact
                        path="/contact"
                        component={ContactPage}
                    />
                    <Route 
                        exact
                        path="/documentaries"
                        component={DocumentariesPage}
                    />
                     <Route
                        exact
                        path="/gallery"
                        component={Gallery}
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
                    <Route 
                        exact 
                        path="/about" 
                        component={About} 
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
                     <Switch>
                        <ProtectedRoute 
                            exact 
                            path="/settings" 
                            component={Settings}
                        />
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
  }
}


export default App