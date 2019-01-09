import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import ForecastItem from 'components/ForecastItem';

import './style.scss';

export class ForecastList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
  };

  render() {
    const { isLoading, items } = this.props;
    return (
      <div className="container text-center overflow-auto">
        <div className="d-inline-flex forecast-list-wrapper">
          {isLoading ? (
            <Spinner
              className="spinner"
              name="line-scale"
              color="white"
              fadeIn="none"
            />
          ) : (
            items.map((item, key) => {
              return <ForecastItem key={key} {...item} />;
            })
          )}
        </div>
      </div>
    );
  }
}

export default ForecastList;
