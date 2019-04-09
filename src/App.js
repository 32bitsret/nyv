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
import RegisterPage from "views/Pages/RegisterPage.jsx";
import LockScreenPage from "views/Pages/LockScreenPage.jsx";
import Register from './containers/Register'
import Home from './containers/Home'
import Members from './containers/Members'

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router history={hist}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/members" component={Members}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={Dashboard}/>
                </div>
            </Router>
        </Provider>
    )
  }
}


export default App