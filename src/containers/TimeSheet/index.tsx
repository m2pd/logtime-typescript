import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditTimeSheetPage from './pages/AddEditTimeSheet';
import MainTimeSheetPage from './pages/Main';

function TimeSheet() {
    const match = useRouteMatch();
    return (
      <Switch>

        <Route exact path={match.url} component={MainTimeSheetPage} />
        <Route path={`${match.url}/add`} component={AddEditTimeSheetPage} />
  
        <Route component={NotFound} />
      </Switch>
    );
}

export default TimeSheet
