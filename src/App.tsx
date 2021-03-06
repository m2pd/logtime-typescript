import * as React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import LoadingComponent from './components/LoadingComponent';
import NotFound from './components/NotFound';

const LoginPage = React.lazy(() => import('./containers/Login'));
const AccountPage = React.lazy(() => import('./containers/Account'));
const TimeSheet = React.lazy(() => import('./containers/TimeSheet'));
const DashBoard = React.lazy(() => import('./containers/DashBoard'));
const Accounts = React.lazy(() => import('./containers/Accounts'));

function App() {
  return (
    <div className='App'>
      <React.Suspense fallback={<LoadingComponent />}>
      <ToastContainer />
        <BrowserRouter>
          <Switch>
            <Redirect exact from='/' to='/login' />
            {/* <Route path="/login" component={MainLoginPage} /> */}
            <Route path='/login' component={LoginPage} />
            <Route path='/account' component={AccountPage} />
            <Route path='/timesheet' component={TimeSheet} />
            <Route path='/dashboard' component={DashBoard} />
            <Route path='/accounts' component={Accounts} />
            
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
