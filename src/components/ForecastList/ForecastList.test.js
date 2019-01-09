import React from 'react';
import ReactDOM from 'react-dom';
import ForecastList from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForecastList isLoading={true} items={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
