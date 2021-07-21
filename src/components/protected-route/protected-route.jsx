import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';


const ProtectedRoute = ({ component: Component, ...props  }) => {

const forgotPageVisit = useSelector(store => store.passwordForgot.forgotPageVisit)



  return (

    

    <Route
      {...props}

      render={({ location }) =>

        (props.loggedIn || forgotPageVisit) ? ( <Component {...props} />) : (<Redirect 
        
        to={{ pathname: '/login', state: { from: location } }} />
        
        )
        
      }
    />

)}

export default ProtectedRoute;
