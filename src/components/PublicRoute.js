import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - If route is restricted => and user logged in => render of Redirect to /todos
 * - Else render of Component
 */

/* 
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
}); 

export default connect(mapStateToProps)(PublicRoute);
*/
 
export default function PublicRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const inLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return <Route {...routeProps}>{ 
    inLoggedIn && routeProps.restricted 
    ? (<Redirect to={redirectTo}/>) 
    : (children)
    }</Route>;
}

/* export default PublicRoute; */

{/* render={props =>
  isAuthenticated && routeProps.restricted 
    ? ( <Redirect to={ redirectTo } /> ) 
    : (
    <Component { ...props } />
  ) */}
