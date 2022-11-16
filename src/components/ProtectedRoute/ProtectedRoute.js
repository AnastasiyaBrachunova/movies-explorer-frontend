import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props}) => {
    
    return (
        <Route>
            {
               props.loggedIn ? <Component {...props}/> : <Redirect to="/signin"/> 
               //компонент переданный пропсом будет перекидываться на sigin если нет регистрации
            }

        </Route>
    )
}

export default ProtectedRoute;