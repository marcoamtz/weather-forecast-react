import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import ForecastItem from 'components/ForecastItem';

import './style.scss';

const ForecastList = ({ isLoading, name, items }) => {
  return (
    <div className="container text-center forecast-list-wrapper">
      <h2 className="list-title mb-4">{name}</h2>
      <div className="overflow-auto">
        <div className="d-inline-flex">
          {isLoading ? (
            <Spinner
              className="spinner"
              name="line-scale"
              color="white"
              fadeIn="none"
            />
          ) : (
            items.map((item, index) => {
              return <ForecastItem key={index} {...item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

ForecastList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default ForecastList;
