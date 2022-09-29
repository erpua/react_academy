import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - If route is private and user logged in => render of component
 * - Else render Redirect to /login
 */
const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    /* {...routeProps}
    render={props =>
      isAuthenticated 
        ? <Component {...props} /> 
        : <Redirect to="/login" />
    } */
    {...routeProps}
    //if render () => props - props of router  => match, location, history
    render={props =>
      isAuthenticated 
        ? <Component {...props} /> 
        : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);