import React, { Component } from 'react';
import Header from 'components/Header';
import Search from 'components/Search';
import ForecastList from 'components/ForecastList';
import Footer from 'components/Footer';
import { getDailyForecastByCityName } from 'api/openweathermap';

class App extends Component {
  state = { searchValue: '', forecastItems: [], isLoading: false };

  handleValueChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSearch = async () => {
    this.setState({ isLoading: true });
    const forecastItems = await getDailyForecastByCityName(
      this.state.searchValue,
    );
    this.setState({ isLoading: false, forecastItems });
  };

  render() {
    const { searchValue, forecastItems, isLoading } = this.state;

    return (
      <div className="container">
        <Header />
        <Search
          searchValue={searchValue}
          onValueChange={this.handleValueChange}
          onSearch={this.handleSearch}
        />
        <ForecastList isLoading={isLoading} items={forecastItems} />
        <Footer />
      </div>
    );
  }
}

export default App;
