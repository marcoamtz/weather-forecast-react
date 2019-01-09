import React, { Component } from 'react';
import Search from 'components/Search';
import ForecastList from 'components/ForecastList';
import { getDailyForecastByCityName } from 'api/openweathermap';

import './style.scss';

class App extends Component {
  state = { searchValue: '', forecastItems: [] };

  // TODO: delete this method when finished
  async componentDidMount() {
    const forecastItems = await getDailyForecastByCityName('London');
    console.log('forecast:::', forecastItems);
    this.setState({ forecastItems });
  }

  handleValueChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSearch = async () => {
    const forecastItems = await getDailyForecastByCityName(
      this.state.searchValue,
    );
    this.setState({ forecastItems });
  };

  render() {
    const { searchValue, forecastItems } = this.state;

    return (
      <div className="app-container">
        <Search
          searchValue={searchValue}
          onValueChange={this.handleValueChange}
          onSearch={this.handleSearch}
        />
        <ForecastList items={forecastItems} />
      </div>
    );
  }
}

export default App;
