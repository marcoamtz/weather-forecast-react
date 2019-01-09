import queryString from 'query-string';
import { handleApiErrors, groupByDay, filterDayGroups } from 'helpers';

const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '18e85b65aa42d26a401cb814c270cf92';

const fetchApi = async (endpoint, query = {}) => {
  const url = `${API_URL}${endpoint}?appid=${API_KEY}&${queryString.stringify(
    query,
  )}`;
  const response = await fetch(url);

  handleApiErrors(response);
  return response;
};

export const getDailyForecastByCityName = async (
  cityName,
  units = 'imperial',
) => {
  try {
    const response = await fetchApi('/forecast', { q: cityName, units });
    const responseData = await response.json();
    const list = responseData.list;

    const dayList = groupByDay(list);

    const filteredList = filterDayGroups(dayList);

    return filteredList;
  } catch (e) {
    console.log('error', e);
  }
};
