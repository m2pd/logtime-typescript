import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import MainAccountPage from './pages/Main';

function Account() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainAccountPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Account;
