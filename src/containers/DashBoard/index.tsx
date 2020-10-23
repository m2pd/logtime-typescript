import React from 'react'
import { Route, useRouteMatch,Switch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import MainDashBoardPage from './pages/Main';


function DashBoard() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainDashBoardPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default DashBoard;