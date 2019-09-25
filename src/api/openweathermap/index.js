import queryString from 'query-string';
import { toast } from 'react-toastify';
import { groupByDay, filterDayGroups } from 'helpers';

const API_URL = process.env.REACT_APP_OPEN_WEATHER_URL;
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;

const fetchApi = async (endpoint, query = {}) => {
  try {
    const url = `${API_URL}${endpoint}?appid=${API_KEY}&${queryString.stringify(
      query
    )}`;
    const response = await fetch(url);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getDailyForecastByCityName = async (
  cityName,
  units = 'imperial'
) => {
  try {
    const response = await fetchApi('/forecast', { q: cityName, units });
    if (response.ok) {
      const responseData = await response.json();
      const { city, list } = responseData;

      const dayList = groupByDay(list);

      const filteredList = filterDayGroups(dayList);

      return { cityName: city.name, forecastItems: filteredList };
    } else {
      toast.error(response.statusText);
    }
  } catch (error) {
    throw error;
  }
};
