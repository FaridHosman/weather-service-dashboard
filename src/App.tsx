import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { RoutePathComponent } from './types/types';
import Home from './views/home/Home';

const routes: Array<RoutePathComponent> = [
  {
      path: '/',
      component: Home
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
              {routes.map(route => (
                  <Route
                      key={'001'}
                      path={route.path}
                      exact={true}
                      component={route.component}
                  />
              ))}
              <Redirect to='/' />
          </Switch>
      </Router>
    </div>
  );
};

export default App;
