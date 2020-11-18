import React from 'react'
import { Route, useRouteMatch,Switch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditAccountPage from './pages/AddEditUser';
import MainAccountListPage from './pages/Main';


function AccountList() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainAccountListPage} />
      <Route patch={`${match.url}/add`} component={AddEditAccountPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default AccountList;