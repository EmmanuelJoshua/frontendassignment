import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Detail from './Detail'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const routes = (
  <Router>
      <Switch>
      <Route path="/users/:id" component={Detail} />
        <Route path="/users" component={App} />
        <Redirect from="/" to="/users"/>
      </Switch>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);

serviceWorker.unregister();
