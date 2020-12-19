import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherWidget from './components/WeatherWidget';

ReactDOM.render(
  <div className="container">
    <div className="cards">
      <React.StrictMode>
        <WeatherWidget
          city={'Los-Angeles'}
          deg={17}
          dir={230}
          wind={2}
          wet={80}
          type={'sunny'}
        />
        <WeatherWidget
          city={'New York'}
          deg={12}
          dir={300}
          wind={4}
          wet={50}
          type={'cloudy'}
        />
        <WeatherWidget
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
