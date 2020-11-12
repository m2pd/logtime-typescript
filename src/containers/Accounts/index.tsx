import React from 'react'
import { Route, useRouteMatch,Switch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import MainAccountListPage from './pages/Main';


function AccountList() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainAccountListPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default AccountList;