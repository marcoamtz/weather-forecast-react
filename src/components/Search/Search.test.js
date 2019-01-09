import React from 'react';
import ReactDOM from 'react-dom';
import Search from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Search searchValue="" onValueChange={jest.fn()} onSearch={jest.fn()} />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
