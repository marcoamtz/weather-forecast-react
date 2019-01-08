import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Search = ({ searchValue, onValueChange, onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSearch}>
      <p>Type a city name to get a 5 day forecast</p>
      <input
        type="text"
        value={searchValue}
        onChange={onValueChange}
        placeholder="City Name"
      />
      <button type="submit">Get Forecast</button>
    </form>
  );
};

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
