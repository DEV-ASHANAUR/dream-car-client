import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user,isLoading,isUser} = useAuth();
    //waiting for user status
    if(isLoading){
        return (<div className="text-center d-flex justify-content-center align-items-center" style={{minHeight:'40vh'}}>
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
            );
    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email && isUser ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default AdminRoute;