/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {_AuthGuard} from '../_guard';
 const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      _AuthGuard()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)
export {PrivateRoute}