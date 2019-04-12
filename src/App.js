import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "routes/index.jsx";
import ProtectedRoute from './utils/ProtectedRoute'
import { Provider } from 'react-redux';
import store from './store'; 
import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";


import Pages from './layouts/Pages'
import Dashboard from './containers/Dashboard'
import PricingPage from "views/Pages/PricingPage.jsx";
import Login from "./containers/Login";
import Register from './containers/Register'
import Home from './containers/Home'
import Members from './containers/Members'
import Messages from './containers/Messages'
import Notifications from './containers/Notifications'
const hist = createBrowserHistory();



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
                            path="/members" 
                            component={Members}
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