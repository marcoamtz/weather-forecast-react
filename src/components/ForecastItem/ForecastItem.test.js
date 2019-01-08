import React from 'react';
import ReactDOM from 'react-dom';
import ForecastItem from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForecastItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
