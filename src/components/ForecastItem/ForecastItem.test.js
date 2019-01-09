import React from 'react';
import ReactDOM from 'react-dom';
import ForecastItem from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ForecastItem day="Mon" icon="11d" maxTemp={40} minTemp={10} />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
