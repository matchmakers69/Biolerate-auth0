import React from 'react';
import { mainRoutes } from 'config/routesMapper';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from 'components/Auth/PrivateRoute';
import { constants } from '../constants';
import Login from 'pages/Login';
import NotFound from 'pages/404';

const { ROOT, LOGIN } = constants.route;

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={ROOT} render={() => <Redirect to={LOGIN} />} />
        {mainRoutes.map(({ isPrivate, ...props }) => {
          return isPrivate ? <PrivateRoute key={props.path} {...props} /> : <Route key={props.path} {...props} />;
        })}

        <Route exact component={Login} path={LOGIN} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
