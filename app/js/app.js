import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import '../css/styles.scss';

import App from 'views/App';
import Home from 'views/Home';
import About from 'views/About';
import Project from 'views/Projects';


ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } />
      <Route path='projects' component={ Project } />
    </Route>
  </Router>,
  document.getElementById('app') // eslint-disable-line
);
