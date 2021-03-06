import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class WeatherWidget extends React.Component {
  render() {
    const { type, city, deg, dir } = this.props;
    const weather = 'weather__icon ' + type;
    const style = {
      transform: 'rotate(' + dir + 'deg)',
    };
    const wind = this.props.wind;
    const wet = this.props.wet;
    return (
      <div className="card">
        <div className="card__city">{city}</div>
        <div className="card__line"></div>
        <div className="weather">
          <div className={weather}></div>
          <span className="weather__degrees">{deg}</span>
        </div>
        <div className="card-text">
          <div className="сard-direction">
            <p>Направление: </p>
            <div className="сard-direction__arrow" style={style}></div>
          </div>
          <p className="card__wind">Ветер: {wind} м/c</p>
          <p className="card__wet">Влажность: {wet}%</p>
        </div>
      </div>
    );
  }
}
WeatherWidget.propTypes = {
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  dir: PropTypes.number.isRequired,
  deg: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  wet: PropTypes.number.isRequired,
};
export default WeatherWidget;
