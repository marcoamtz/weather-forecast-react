import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

import './style.scss';

export class ForecastItem extends Component {
  static propTypes = {
    day: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
  };

  render() {
    const { day, icon, maxTemp, minTemp } = this.props;
    return (
      <span className="forecast-item">
        <span className="day-header">{day}</span>
        <Icon code={icon} height="4em" width="4em" className="weather-icon" />
        <span className="temp-footer">
          <span className="max-temp">{Math.round(maxTemp)}°</span>
          <span className="min-temp">{Math.round(minTemp)}°</span>
        </span>
      </span>
    );
  }
}

export default ForecastItem;
