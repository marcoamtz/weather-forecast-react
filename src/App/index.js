import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from 'components/Header';
import Search from 'components/Search';
import ForecastList from 'components/ForecastList';
import Footer from 'components/Footer';
import { getDailyForecastByCityName } from 'api/openweathermap';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cityName, setCityName] = useState('');
  const [forecastItems, setForecastItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleValueChange = e => setSearchValue(e.target.value);

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      const { cityName, forecastItems } = await getDailyForecastByCityName(
        searchValue
      );

      setCityName(cityName);
      setForecastItems(forecastItems);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <Search
        searchValue={searchValue}
        onValueChange={handleValueChange}
        onSearch={handleSearch}
      />
      <ForecastList
        isLoading={isLoading}
        name={cityName}
        items={forecastItems}
      />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
