import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('performs search', async () => {
  const searchFn = jest.fn();
  const component = shallow(
    <App searchValue="" onValueChange={jest.fn()} onSearch={searchFn} />,
  );
  component.setState({ searchValue: 'london' });
  await component.instance().handleSearch();
  const forecastItems = component.state().forecastItems;
  expect(forecastItems).toHaveLength(5);
});
