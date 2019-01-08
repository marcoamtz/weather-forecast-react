import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from 'components/ForecastItem';

import './style.scss';

export class ForecastList extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        Forecast List
        {/* Checar si no hay items para mostrar componente vacio */}
        {/* añadir un flag para mostrar el loader */}
        <div className="forecast-list-wrapper">
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
        </div>
      </div>
    );
  }
}

export default ForecastList;
