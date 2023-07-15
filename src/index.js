import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import FormDataPage from './components/FormDataPage';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/form-data" component={FormDataPage} />
  </Router>,
  document.getElementById('root')
);
