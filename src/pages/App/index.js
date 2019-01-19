import React, { Component } from 'react';
import Header from 'components/Header';
import Search from 'components/Search';
import ForecastList from 'components/ForecastList';
import Footer from 'components/Footer';
import { getDailyForecastByCityName } from 'api/openweathermap';

class App extends Component {
  state = {
    searchValue: '',
    cityName: '',
    forecastItems: [],
    isLoading: false,
  };

  handleValueChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSearch = async () => {
    this.setState({ isLoading: true, cityName: '' });
    const response = await getDailyForecastByCityName(this.state.searchValue);
    const { cityName, forecastItems } = response;
    this.setState({ isLoading: false, cityName, forecastItems });
  };

  render() {
    const { searchValue, cityName, forecastItems, isLoading } = this.state;

    return (
      <div className="container">
        <Header />
        <Search
          searchValue={searchValue}
          onValueChange={this.handleValueChange}
          onSearch={this.handleSearch}
        />
        <ForecastList
          isLoading={isLoading}
          name={cityName}
          items={forecastItems}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
