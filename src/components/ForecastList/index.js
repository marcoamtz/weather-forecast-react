import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from 'components/ForecastItem';

import './style.scss';

export class ForecastList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    const { items } = this.props;
    return (
      <div>
        Forecast List
        {/* Show empty component if no items */}
        {/* add loader component and flag */}
        <div className="forecast-list-wrapper">
          {items.map((item, key) => {
            return <ForecastItem key={key} {...item} />;
          })}
        </div>
      </div>
    );
  }
}

export default ForecastList;
