import React from 'react';
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...props  }) => {

  return (

    <Route
      {...props}

      render={({ location }) =>

        props.loggedIn ? ( <Component {...props} />) : (<Redirect 
        
        to={{ pathname: '/login', state: { from: location } }} />
        
        )
        
      }
    />

)}

export default ProtectedRoute;
