import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
// <Route
//     {...rest}
//     render={props =>
//       auth.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );


const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
      {...rest}
      render={props =>{
        console.log("INSIDE PRIVATE ROUTE", auth)
        if(auth.isAuthenticated === true && auth.user.role === "admin" ){
          return (
            <Component {...props} />
          )
        }
        else if(auth.isAuthenticated === true && auth.user.role !== "admin" ){
          <Redirect to="/login" />
        }
        else{
         return( 
          <Redirect to="/login" />
          )
        }
      }}
    />
  );

ProtectedRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth:state.auth
  }
}
export default connect(mapStateToProps, null)(ProtectedRoute)
