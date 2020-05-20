import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
//   );
// ReactDOM.render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'))
ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/admin' component={Admin}/>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
