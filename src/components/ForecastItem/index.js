import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

import './style.scss';

export class ForecastItem extends Component {
  static propTypes = {};

  render() {
    return (
      <span className="forecast-item">
        <span className="day-header">Mon</span>
        <Icon code="04d" height="4em" width="4em" className="weather-icon" />
        <span className="temp-footer">
          <span className="max-temp">30°</span>
          <span className="min-temp">5°</span>
        </span>
      </span>
    );
  }
}

export default ForecastItem;
