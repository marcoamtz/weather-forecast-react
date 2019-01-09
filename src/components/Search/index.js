import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Search = ({ searchValue, onValueChange, onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    if (searchValue) {
      onSearch();
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="search-title my-4">
        Enter a city name to get a 5 day forecast
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={searchValue}
          onChange={onValueChange}
          placeholder="City Name"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-outline-primary btn-submit">
            Get Forecast
          </button>
        </div>
      </div>
    </form>
  );
};

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
