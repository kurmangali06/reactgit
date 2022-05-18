import React from 'react';
import { MessageList } from './MessageList';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageList', () => {
  it('renders MessageList component', () => {
    render(<MessageList messages={[]} />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<MessageList messages={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

});
