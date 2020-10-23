import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import MainLoginPage from './pages/Main';

function Login() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainLoginPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Login;
