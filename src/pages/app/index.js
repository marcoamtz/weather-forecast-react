import React, { Component } from 'react';
import Search from 'components/Search';
import ForecastList from 'components/ForecastList';

import './style.scss';

class App extends Component {
  state = { searchValue: '' };

  handleValueChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSearch = () => {
    console.log('search::', this.state.searchValue);
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="app-container">
        <Search
          searchValue={searchValue}
          onValueChange={this.handleValueChange}
          onSearch={this.handleSearch}
        />
        <ForecastList />
      </div>
    );
  }
}

export default App;
