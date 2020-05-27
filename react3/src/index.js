import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="container">
    <div className="cards">
      <React.StrictMode>
        <App
          city={'Los-Angeles'}
          deg={17}
          dir={230}
          wind={2}
          wet={80}
          type={'sunny'}
        />
        <App
          city={'New York'}
          deg={12}
          dir={300}
          wind={4}
          wet={50}
          type={'cloudy'}
        />
        <App
          city={'Йошкар-Ола'}
          deg={12}
          dir={390}
          wind={3}
          wet={90}
          type={'water'}
        />
      </React.StrictMode>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
